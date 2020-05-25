import {Component, OnInit} from '@angular/core';
import {ChartDB} from '../../../../fack-db/chart-data';
import {ApexChartService} from '../../../../theme/shared/components/chart/apex-chart/apex-chart.service';
import {MeetingLists} from '../../../../app-meeting_list';
import {WebServiceService} from '../../../../providers/web-service/web-service.service';
import {NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-crt-apex',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  public chartDB: any;
  Notifications:any;
  Notifications_host:any;
  constructor(public apexEvent: ApexChartService,public meetingList:MeetingLists, private webservice:WebServiceService,private SpinnerService: NgxSpinnerService) {
    this.chartDB = ChartDB;
  }
  ngOnInit() {
    this.InvitationList();
    this.InvitationList_host();
  }
  InvitationList(){
    this.SpinnerService.show();
    let bodystring = {
      "attendee_email": JSON.parse(localStorage.getItem("userDetails")).result.user_email
    };
    this.webservice.NotificationList(bodystring)
      .then(response => {
        this.Notifications = response;
        console.log(this.Notifications);
        this.Notifications=this.Notifications.result;
        this.meetingList.Add(this.Notifications);
      }, (err) => {
        console.log("Error" + err);
      });
  }
  InvitationList_host(){
    let bodystring = {
      "host_id": JSON.parse(localStorage.getItem("userDetails")).result.ID
    };
    this.webservice.NotificationList_Host(bodystring)
      .then(response => {
        this.Notifications_host = response;
        console.log(this.Notifications_host);
        this.SpinnerService.hide();
        this.Notifications_host=this.Notifications_host.result;
        this.meetingList.Add_host(this.Notifications_host);
      }, (err) => {
        console.log("Error" + err);
      });
  }
}
