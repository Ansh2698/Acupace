import { Component, OnInit } from '@angular/core';
import {UserList} from './basic-elements'
import {WebServiceService} from '../../../../providers/web-service/web-service.service';
import {MeetingLists} from '../../../../app-meeting_list';
import * as moment from 'moment';
import {Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.css']
})
export class BasicElementsComponent implements OnInit {
  public usersList:any;
  public Notifications:any;
  timerId:any;
  current_time:any;
  constructor(public users:UserList, private webservice:WebServiceService,public Meetings:MeetingLists,private router:Router) {
  }
  ngOnInit() {
    this.InvitationList();
  }
  ngOnDestroy(){
    clearInterval(this.timerId)
  }
  Join_Meeting(Notification:any){
    this.current_time=moment();
    if(moment(Notification.host_meeting_end_time).isSameOrAfter(this.current_time) && moment(Notification.host_meeting_start_time).isSameOrBefore(this.current_time)){
      this.router.navigate(['/admin/sample-page'], { queryParams: { id:Notification.room_id} });
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Either the Meeting Ended or You tried to enter before the Schedule',
      })
    }
  }
  InvitationList(){
    this.Notifications=this.Meetings.fetch();
    console.log(this.Notifications);
  }
}
