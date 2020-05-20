import { Component, OnInit } from '@angular/core';
import {UserList} from './basic-elements'
import {WebServiceService} from '../../../../providers/web-service/web-service.service';
import {MeetingLists} from '../../../../app-meeting_list';
@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.css']
})
export class BasicElementsComponent implements OnInit {
  public usersList:any;
  public Notifications:any;
  timerId:any;
  constructor(public users:UserList, private webservice:WebServiceService,public Meetings:MeetingLists) {
  }
  ngOnInit() {
    this.InvitationList();
    this.timerId=setInterval(()=>{this.Notifications=this.Meetings.fetch()},300);
  }
  ngOnDestroy(){
    clearInterval(this.timerId)
  }
  InvitationList(){
    this.Notifications=this.Meetings.fetch();
    console.log(this.Notifications);
  }
}
