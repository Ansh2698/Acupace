import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name: any;
  profile_pic: any;
  user_email: any;
  mobile: any;
  userId: any;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem("userDetails") != '' || localStorage.getItem("userDetails") != undefined) {
      this.userId = JSON.parse(localStorage.getItem("userDetails")).result.ID;
      this.name = JSON.parse(localStorage.getItem("userDetails")).result.name;
      this.user_email = JSON.parse(localStorage.getItem("userDetails")).result.user_email;
      this.mobile = JSON.parse(localStorage.getItem("userDetails")).result.mobileno;
      this.profile_pic = JSON.parse(localStorage.getItem("userDetails")).result.profile_pic;
    }
  }

}
