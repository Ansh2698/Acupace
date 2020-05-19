import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { WebServiceService } from '../../../../providers/web-service/web-service.service';
import { Router, ActivatedRoute, ParamMap,NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {
  public registerForm: FormGroup;
  public submitAttempt: boolean = false;
  show: boolean = true;
  bodystring: any;
  lat: any;
  long: any;
  customerMobileNo: any;
  data: any;
  sponsor_user_id: any;
  sponsor_name: any;
  sponsor_emailid: any;
  sponsor_mobileno: any;
  customer_mobileno: any;
  registeredBy: any;
  constructor(public formBuilder: FormBuilder, private webservice: WebServiceService,private route: ActivatedRoute,private router: Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'), Validators.required])],
      mobile: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])]
   });
   }

  ngOnInit() {
  }
  Signup() {
    this.submitAttempt = true;
      let bodystring = {
        "name": this.registerForm.get('name').value,
        "email": this.registerForm.get('email').value,
        "mobileno": this.registerForm.get('mobile').value,
        "lat":'',//this.lat
        "long": '',//this.long,
        "device_id": '',//localStorage.getItem("deviceid"),
        "device_details": '',//localStorage.getItem("devicedetails"),
      };
      this.webservice.UserRegister(bodystring)
        .then(response => {
          let data = JSON.stringify(response);
          // this.webservice.showAlert(response);
          // this.navCtrl.setRoot(LoginPage);
          console.log('data' + data);
          this.router.navigate(['/admin/auth/signin']);
        }, (err) => {
          console.log("Error" + err);
        });
    }
}

/*import { Component, ElementRef, Renderer, Input ,OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';
// import { NavController, AlertController, Events, LoadingController, Loading, IonicPage, NavParams, Platform } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { WebServiceService } from '../../../../providers/web-service/web-service.service';
@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss'],
 
})
export class AuthSignupComponent implements OnInit {
  public registerForm: FormGroup;
  public submitAttempt: boolean = false;
  show: boolean = true;
  bodystring: any;
  lat: any;
  long: any; 
  customerMobileNo: any;
  data: any;
  sponsor_user_id: any;
  sponsor_name: any;
  sponsor_emailid: any;
  sponsor_mobileno: any;
  customer_mobileno: any;
  registeredBy: any;
  constructor(
    // public navCtrl: NavController,
    // private alertCtrl: AlertController, public events: Events,
    // private loadingCtrl: LoadingController, public navParams: NavParams, public platform: Platform,
     public formBuilder: FormBuilder, //private elRef: ElementRef, private renderer: Renderer,
     private webservice: WebServiceService,// private geolocation: Geolocation
  ) {
    console.log('ionViewDidLoad RegistrationPage');
    // this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: true }).then((resp) => {
    //   let location = new LatLng(resp.coords.latitude, resp.coords.longitude);
    //   console.log('location' + JSON.stringify(location));
    //   this.lat = location.lat;
    //   this.long = location.lng;
    // });
     this.registerForm = this.formBuilder.group({
       name: ['', Validators.compose([Validators.required])],
       email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'), Validators.required])],
       mobile: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])]
    });
    // if (localStorage.getItem("customerMobileNo") != '') {
    //   this.customer_mobileno = localStorage.getItem("customerMobileNo");
    //   this.sponsor_name = localStorage.getItem("loggedUsername");
    //   this.sponsor_user_id = localStorage.getItem("loggedUserID");
    //   this.registerForm.controls.mobile.setValue(this.customerMobileNo);
    //   this.show = false;
    // } else {
    //   this.customer_mobileno = '';
    //   this.sponsor_user_id = '';
    //   this.sponsor_name = '';
    // }
  }
  // ionViewDidLoad() { }
  signUp() {
    this.submitAttempt = true;
      let bodystring = {
        "name": this.registerForm.get('name').value,
        "email": this.registerForm.get('email').value,
        "mobileno": this.registerForm.get('mobile').value,
        "lat":'',//this.lat
        "long": '',//this.long,
        "device_id": '',//localStorage.getItem("deviceid"),
        "device_details": '',//localStorage.getItem("devicedetails"),
      };
      this.webservice.UserRegister(bodystring)
        .then(response => {
          let data = JSON.stringify(response);
          // this.webservice.showAlert(response);
          // this.navCtrl.setRoot(LoginPage);
          console.log('data' + data);
        }, (err) => {
          console.log("Error" + err);
        });
  }
  // login() {
  //   this.navCtrl.setRoot(LoginPage);
  // }
  // ionViewDidEnter() { }
  ngOnInit() {
  }
}
*/
