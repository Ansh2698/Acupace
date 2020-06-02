import { Component, OnInit, ViewChild, ElementRef,AfterViewInit} from '@angular/core';
import { AgoraClient, ClientEvent, NgxAgoraService, Stream, StreamEvent } from 'ngx-agora';
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {WebServiceService} from '../../../providers/web-service/web-service.service'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScreenfullService } from '@ngx-extensions/screenfull';
@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent{
  @ViewChild('widgetsContent', {read: ElementRef,static:true}) public widgetsContent: ElementRef<any>;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }
  activeCall: boolean = false;
  public agoraAppId= "c023596a5f6d4c949d9b207101ee8c74";
  audioEnabled: boolean = true;
  videoEnabled: boolean = true;
  title = 'angular-video';
  localCallId = 'agora_local-fullscreen';
  channel_name:any;
  remoteCalls: string[] = [];
  private client: AgoraClient;
  private screenclient:AgoraClient;
  private localStream: Stream;
  private screenStream:Stream;
  private uid: any;
  public id:any;
  public Status:any;
  public sub:any;
  public remoteStreams = {};
  public LocalStreamID=this.localCallId;
  public fullscreen:boolean=true;
  readonly mode$: Observable<string>;
  public cardClass:string;
  public fullIcon: string;
  constructor(private ngxAgoraService: NgxAgoraService,private router:Router, private route: ActivatedRoute,private webservice:WebServiceService,public readonly screenfullService: ScreenfullService) {
    this.mode$ = this.screenfullService.fullScreenActive$.pipe(
      map(active => (active ? 'active' : 'inactive'))
     );
     this.fullIcon = 'icon-maximize';
  }
  ngOnInit(){
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.uid =params['room_id'];
      this.channel_name=params['channel'];
      this.id=params['id'];
    });
    this.startCall();
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  startCall(){
    this.activeCall=true;
    this.client = this.ngxAgoraService.createClient({ mode: 'rtc', codec: 'h264' });
    this.assignClientHandlers();

    this.localStream = this.ngxAgoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: false });
    this.localStream.setVideoProfile("120p_1");
    this.assignLocalStreamHandlers();
    // Join and publish methods added in this step
    this.initLocalStream(() => this.join(uid => this.publish(), error => console.error(error)));
  }
  ScreenShare(){
    this.screenclient=this.ngxAgoraService.createClient({ mode: 'rtc', codec: 'h264' });
    this.assignScreenHandlers();
    this.screenStream=this.ngxAgoraService.createStream({streamID: this.uid, audio: false, video: false, screen: true,mediaSource:  'screen'});
    this.screenStream.setVideoProfile("480p_2");
    this.assignScreenStreamHandlers();
    this.initScreenStream(()=> this.joinScreen(uid => this.publishScreen(), error => console.error(error)));
  }
  /**
   * Attempts to connect to an online chat room where users can host and receive A/V streams.
   */
  join(onSuccess?: (uid: number | string) => void, onFailure?: (error: Error) => void): void {
    this.client.join(null, this.channel_name, this.uid, onSuccess, onFailure);
  }
  joinScreen(onSuccess?: (uid: number | string) => void, onFailure?: (error: Error) => void): void {
    this.screenclient.join(null, this.channel_name, null, onSuccess, onFailure);
  }

  /**
   * Attempts to upload the created local A/V stream to a joined chat room.
   */
  publish(): void {
    this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
  }
  publishScreen():void{
    this.screenclient.publish(this.screenStream, err => console.log('Publish Screen stream error: ' + err));
  }
  unpublish(): void {
    this.client.unpublish(this.localStream, error => console.error(error));
  }
  private assignClientHandlers(): void {
    this.client.on(ClientEvent.LocalStreamPublished, evt => {
      console.log('Publish local stream successfully');
    });

    this.client.on(ClientEvent.Error, error => {
      console.log('Got error msg:', error.reason);
      if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.client.renewChannelKey(
          '',
          () => console.log('Renewed the channel key successfully.'),
          renewError => console.error('Renew channel key failed: ', renewError)
        );
      }
    });

    this.client.on(ClientEvent.RemoteStreamAdded, evt => {
      const stream = evt.stream as Stream;
      this.client.subscribe(stream, { audio: true, video: true }, err => {
        if(err){
          console.log('Subscribe stream failed', err);
        }
        else{
          console.log("Succesfully added");
        }
      });
    });
    this.client.on(ClientEvent.RemoteStreamSubscribed, evt => {
      const stream = evt.stream as Stream;
      const id = this.getRemoteId(stream);
      this.remoteStreams[id]=stream;
      this.remoteCalls.push(id);
      setTimeout(() => stream.play(id), 1000);
    });

    this.client.on(ClientEvent.RemoteStreamRemoved, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = [];
        console.log(`Remote stream is removed ${stream.getId()}`);
      }
    });

    this.client.on(ClientEvent.PeerLeave, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        if(this.remoteStreams[this.localCallId]!=this.localStream){
          this.Toggle(this.localCallId,this.LocalStreamID);
        }
        stream.stop();
        delete this.remoteStreams[evt.uid];
        this.remoteCalls = this.remoteCalls.filter(call => call !== `${this.getRemoteId(stream)}`);
        console.log(`${evt.uid} left from this channel`);
        Swal.fire(
          'Someone Left',
          'Person with stream id:'+`${evt.uid}`+' has left the Channel',
          'question'
        )
      }
    });
  }
  private assignScreenHandlers():void{
    this.screenclient.on(ClientEvent.LocalStreamPublished, evt => {
      console.log('Publish screen stream successfully');
      this.localStream.stop();
    });
  }
  private assignLocalStreamHandlers(): void {
    this.localStream.on(StreamEvent.MediaAccessAllowed, () => {
      console.log('accessAllowed');
    });

    // The user has denied access to the camera and mic.
    this.localStream.on(StreamEvent.MediaAccessDenied, () => {
      console.log('accessDenied');
    });
  }
  private assignScreenStreamHandlers(){
    this.screenStream.on(StreamEvent.ScreenSharingStopped,function(evt){
      console.log("screen sharing stopped");
    })
  }
  private initLocalStream(onSuccess?: () => any): void {
    this.localStream.init(
      () => {
        // The user has granted access to the camera and mic.
        this.localStream.play(this.localCallId);
        this.remoteStreams[this.localCallId]=this.localStream;
        if (onSuccess) {
          onSuccess();
        }
      },
      err => console.error('getUserMedia failed', err)
    );
  }
  private initScreenStream(onSuccess?: () => any):void{
    this.screenStream.init(()=>{
      if(onSuccess){
        onSuccess();
      }
      console.log("Screeen share Succesfully");
    },err=>console.error("Get screen Media failed",err));
  }
  leave(){
    if(this.activeCall){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to Join this Meeting Again!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, End the Call'
      }).then((result) => {
        if (result.value) {
          this.client.leave(() => {
            this.activeCall = false;
            this.remoteCalls=[];
            this.localStream.close();
            let bodystring = {
              "id": this.id,
              "room_id":this.uid
            };
            this.webservice.Update_meeting(bodystring)
              .then(response => {
                this.Status=response;
                this.Status=this.Status.result;
                Swal.fire(
                  'Meeting Ended',
                  ''+ this.Status+'',
                  'success'
                ).then((result)=>{
                  this.router.navigate(['/admin/overview']);
                })
              }, (err) => {
                console.log("Error" + err);
            });
          }, (err) => {
            console.log("Leave channel failed");
          });
        }
      })
    }
    else {
      this.ngxAgoraService.AgoraRTC.Logger.warning('Local client is not connected to channel.');
    }
  }
  toggleAudio() {
    this.audioEnabled = !this.audioEnabled;
    if (this.audioEnabled) this.localStream.enableAudio();
    else this.localStream.disableAudio();
  }

  toggleVideo() {
    this.videoEnabled = !this.videoEnabled;
    if (this.videoEnabled) this.localStream.enableVideo();
    else this.localStream.disableVideo();
  }
  private getRemoteId(stream: Stream): string {
    return `agora_remote-${stream.getId()}`;
  }
  Toggle_Stream(remoteId:any){
    if(this.remoteStreams[this.localCallId]!=this.localStream){
      if(this.LocalStreamID!=remoteId){
        this.Toggle(this.localCallId,this.LocalStreamID);
        this.LocalStreamID = this.localCallId;
        this.Toggle(this.localCallId,remoteId);
        this.LocalStreamID = remoteId;
      }
      else{
        this.Toggle(this.localCallId,remoteId);
        this.LocalStreamID = this.localCallId;
      }
    }
    else{
      this.Toggle(this.localCallId,remoteId);
      this.LocalStreamID=remoteId;
    }
  }
  Toggle(local:any,remote:any){
      this.remoteStreams[local].stop();
      this.remoteStreams[local].play(remote);
      this.remoteStreams[remote].stop();
      this.remoteStreams[remote].play(local);
      let stream:Stream=this.remoteStreams[local];
      this.remoteStreams[local]=this.remoteStreams[remote];
      this.remoteStreams[remote]=stream;
  }
  toggleScreen(){
    this.cardClass=this.cardClass==="full-card"?"":"full-card";
    this.fullIcon = this.cardClass === 'full-card' ? 'icon-minimize' : 'icon-maximize';
  }
}

