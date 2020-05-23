import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { WebServiceService } from '../../../../providers/web-service/web-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent implements OnInit {
  public inviteForm: FormGroup;
  public submitAttempt: boolean = false;
  bodystring: any;
  constructor(public formBuilder: FormBuilder, private webservice: WebServiceService) {
    this.inviteForm = this.formBuilder.group({
      channel_name:['', Validators.compose([Validators.required])],
      attendee_email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'), Validators.required])],
      host_meeting_start_time: ['', Validators.compose([Validators.required])],
      host_meeting_end_time: ['', Validators.compose([Validators.required])],
    });
  }
  ngOnInit() {
  }
  Invite() {
    this.submitAttempt = true;
    if (this.inviteForm.valid) {
      let bodystring = {
        "host_id": JSON.parse(localStorage.getItem("userDetails")).result.ID,
        "host_name": JSON.parse(localStorage.getItem("userDetails")).result.name,
        "host_email": JSON.parse(localStorage.getItem("userDetails")).result.user_email,
        "role": "host",
        "channel_name":this.inviteForm.get('channel_name').value,
        "host_device_details": localStorage.getItem("devicedetails"),
        "host_meeting_start_time": this.inviteForm.get('host_meeting_start_time').value,
        "host_meeting_end_time": this.inviteForm.get('host_meeting_end_time').value,
        "attendee_email": this.inviteForm.get('attendee_email').value,
      };
      this.webservice.AddInvitation(bodystring)
        .then(response => {
          let data = JSON.stringify(response);
          // this.webservice.showAlert(response);
          // this.navCtrl.setRoot(LoginPage);
          Swal.fire({
            icon: 'success',
            title: 'Invitation Sent Successfully',
            text: 'The Attendee/Host now can view the meeting status in their respective boxes',
          })
          console.log('data' + data);
        }, (err) => {
          console.log("Error" + err);
        });
    }
  }
}
