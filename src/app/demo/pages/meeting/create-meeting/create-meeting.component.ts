import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl,FormArray } from '@angular/forms';
import {Router} from '@angular/router';
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
  public email_array;
  bodystring: any;
  public submitLoader: boolean;
  constructor(public formBuilder: FormBuilder, private webservice: WebServiceService, private router:Router) {
    this.inviteForm = this.formBuilder.group({
      channel_name:['', Validators.compose([Validators.required])],
      attendee_email: new FormArray([
        new FormControl('', Validators.required),
      ]),
      host_meeting_start_time: ['', Validators.compose([Validators.required])],
      host_meeting_end_time: ['', Validators.compose([Validators.required])],
    });
    this.submitLoader=false;
  }
  ngOnInit() {
  }
  Invite() {
    this.submitAttempt = true;
    this.submitLoader=true;
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
        "attendee_email": this.attendee_email.value,
      };
      this.webservice.AddInvitation(bodystring)
        .then(response => {
          let data = JSON.stringify(response);
          this.submitLoader=false;
          // this.webservice.showAlert(response);
          // this.navCtrl.setRoot(LoginPage);
          Swal.fire({
            icon: 'success',
            title: 'Invitation Sent Successfully',
            text: 'The Attendee/Host now can view the meeting status in their respective boxes',
          }).then((result)=>{
            this.router.navigate(['/admin/overview']);
          })
          console.log('data' + data);
        }, (err) => {
          console.log("Error" + err);
        });
    }
  }
  get attendee_email(): FormArray {
    return this.inviteForm.get('attendee_email') as FormArray;
  }
  addNameField() {
    this.attendee_email.push(new FormControl('', Validators.required));
  }
  deleteNameField(index: number) {
    if (this.attendee_email.length !== 1) {
      this.attendee_email.removeAt(index);
    }
    console.log(this.attendee_email.length);
  }
}
