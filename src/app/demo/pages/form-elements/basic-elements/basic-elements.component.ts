import { Component, OnInit } from '@angular/core';
import {UserList} from './basic-elements'
import {WebServiceService} from '../../../../providers/web-service/web-service.service'
@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.css']
})
export class BasicElementsComponent implements OnInit {
  public usersList:any;
  public Notifications:any;
  constructor(public users:UserList, private webservice:WebServiceService) {
  }
  ngOnInit() {
    this.InvitationList();
  }
  InvitationList(){
    let bodystring = {
      "attendee_email": JSON.parse(localStorage.getItem("userDetails")).result.user_email
    };
    this.webservice.NotificationList(bodystring)
      .then(response => {
        this.Notifications = response;
        this.Notifications=this.Notifications.result;
      }, (err) => {
        console.log("Error" + err);
      });
  }
}
