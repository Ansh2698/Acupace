import { Component, OnInit } from '@angular/core';
import {UserList} from './user-list'
import {WebServiceService} from '../../../../providers/web-service/web-service.service';
import {MeetingLists} from '../../../../app-meeting_list';
import * as moment from 'moment';
import {Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
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
    if(moment(Notification.host_meeting_end_time).isSameOrAfter(this.current_time) && moment(Notification.host_meeting_start_time).isSameOrBefore(this.current_time) && Notification.meeting_status!=2){
      this.router.navigate(['/admin/sample-page'], { queryParams: { room_id:Notification.room_id,channel:Notification.channel_name,id:Notification.id} });
      // channel and notification_id added
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
