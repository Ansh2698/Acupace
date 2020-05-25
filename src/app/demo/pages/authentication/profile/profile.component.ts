import { Component, OnInit } from '@angular/core';
import {WebServiceService} from '../../../../providers/web-service/web-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Router} from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";  
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public submitAttempt: boolean = false;
  name: any;
  profile_pic: any;
  user_email: any;
  mobile: any;
  userId: any;
  address:any;
  password:any;
  IsaddressEnabled:boolean=false;
  IspasswordEnabled:boolean=false;
  public submitLoader: boolean;
  constructor(private webservice:WebServiceService,public formBuilder: FormBuilder ,private router:Router,private SpinnerService: NgxSpinnerService) {
    this.profileForm = this.formBuilder.group({});
    this.submitLoader=false;
   }
  ngOnInit() {
    this.GetUserDetails();
  }
  GetUserDetails(){
    this.SpinnerService.show();
    let bodystring={
      "userId":JSON.parse(localStorage.getItem("userDetails")).result.ID
    }
    this.webservice.Get_user_details(bodystring)
        .then(response => {
          let data = JSON.stringify(response);
          this.SpinnerService.hide();
          this.name=JSON.parse(data).name;
          this.userId=JSON.parse(data).ID;
          this.profile_pic=JSON.parse(data).profile_pic;
          this.address=JSON.parse(data).address;
          this.user_email=JSON.parse(data).user_email;
          this.password=JSON.parse(data).password;
          // this.webservice.showAlert(response);
          // this.navCtrl.setRoot(LoginPage);
        }, (err) => {
          console.log("Error" + err);
    });
  }
  address_edit(){
    this.IsaddressEnabled=!this.IsaddressEnabled;
    if(this.IsaddressEnabled){
      this.profileForm.addControl('address',new FormControl('', Validators.required));
    }
    else{
      this.profileForm.removeControl('address');
    }
  }
  password_edit(){
    this.IspasswordEnabled=!this.IspasswordEnabled;
    if(this.IspasswordEnabled){
      this.profileForm.addControl('password',new FormControl('', Validators.required));
    }
    else{
      this.profileForm.removeControl('password');
    }
  }
  Logout(){
    this.webservice.Logout_user();
  }
  Update(){
    this.submitAttempt = true;
    this.submitLoader=true;
    let user_address=this.address;
    let user_password=this.password;
    let user_name=this.name;
    if(this.IsaddressEnabled){
      user_address= this.profileForm.get('address').value;
    }
    if(this.IspasswordEnabled){
      user_password=this.profileForm.get('password').value;
    }
    let bodyString={
      "password":user_password,
      "address":user_address,
      "userId":this.userId,
      "name":user_name,
      "profile_pic":this.profile_pic
    };
    this.webservice.Update_user_details(bodyString)
        .then(response => {
          let data = JSON.stringify(response);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          }).then((result)=>{
            this.router.navigate(['/admin/overview']);
          })
          this.submitLoader=false;
          let changed_data=JSON.parse(localStorage.getItem("userDetails"));
          changed_data.result.address=user_address;
          localStorage.removeItem("userDetails");
          localStorage.setItem("userDetails",JSON.stringify(changed_data));
          console.log(data);
          // this.webservice.showAlert(response);
          // this.navCtrl.setRoot(LoginPage);
        }, (err) => {
          console.log("Error" + err);
        });
  }
}
