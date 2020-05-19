import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {WebServiceService} from '../../../../../providers/web-service/web-service.service';
import {Router} from '@angular/router';
import * as moment from 'moment';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {
  name: any;
  profile_pic: any;
  user_email: any;
  mobile: any;
  userId: any;
  Notifications: any;
  timerid:any;
  current_time:any;
  constructor(private webservice:WebServiceService, private router:Router) { }
  ngOnInit() {
    if (localStorage.getItem("userDetails") != '' || localStorage.getItem("userDetails") != undefined) {
      this.userId = JSON.parse(localStorage.getItem("userDetails")).result.ID;
      this.name = JSON.parse(localStorage.getItem("userDetails")).result.name;
      this.user_email = JSON.parse(localStorage.getItem("userDetails")).result.user_email;
      this.mobile = JSON.parse(localStorage.getItem("userDetails")).result.mobileno;
      this.profile_pic = JSON.parse(localStorage.getItem("userDetails")).result.profile_pic;
    }
    this.InvitationList();
    this.timerid=setInterval(()=>this.InvitationList(),3000);
  }
  ngOnDestroy() { 
    clearInterval(this.timerid);
  }
  Logout(){
    this.webservice.Logout_user();
  }
  InvitationList(){
    let bodystring = {
      "attendee_email": this.user_email
    };
    this.webservice.NotificationList(bodystring)
      .then(response => {
        this.Notifications = response;
        this.Notifications=this.Notifications.result;
      }, (err) => {
        console.log("Error" + err);
      });
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
}
