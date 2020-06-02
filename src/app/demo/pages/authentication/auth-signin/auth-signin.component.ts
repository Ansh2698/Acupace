import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { WebServiceService } from '../../../../providers/web-service/web-service.service';
import { Router, ActivatedRoute, ParamMap,NavigationExtras} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  public loginForm: FormGroup;
  public submitAttempt: boolean = false;
  public btnLoader:boolean=false;
  constructor(public formBuilder: FormBuilder, private webservice: WebServiceService,private route: ActivatedRoute,private router: Router) {
    this.loginForm = this.formBuilder.group({
      mobileno: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])],

     // password: ['', Validators.compose([Validators.required, Validators.pattern(RegexPattern.password)])]
     password: ['',Validators.compose([Validators.required])]
   }); 
   }

  ngOnInit() {
    this.webservice.Logout_user();
  }
  login() {
    this.submitAttempt = true;
    this.btnLoader=true;
    if (this.loginForm.valid) {
      let bodystring = {
        "mobileno": this.loginForm.get('mobileno').value,
        "password": this.loginForm.get('password').value,
      };
      this.webservice.login_user_get(bodystring)
        .then(response => {

          let data = JSON.stringify(response);

          console.log('login res -> ', response['result']);
          if (response['result'] != 'No Record') {
            localStorage.setItem("userDetails", data);
            localStorage.setItem("currentUser",data);
            Swal.fire({
              icon: 'success',
              title: 'Welcome to the Acupace Video Conferencing Website',
              text: 'You have succesfuuly LoggedIn',
            })
            this.router.navigate(['/admin/overview']);
          } else {
            Swal.fire({
              icon:'error',
              title:'Phone-number/ Password does not Match',
              text:'Please Enter the Correct Matching Phone-number/Password'
            })
          }
          this.btnLoader=false;
        }, (err) => {
          console.log("Error" + err);
        });
    }

  }

}
