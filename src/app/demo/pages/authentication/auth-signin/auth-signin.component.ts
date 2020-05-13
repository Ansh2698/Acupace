import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { WebServiceService } from '../../../../providers/web-service/web-service.service';
import { Router, ActivatedRoute, ParamMap,NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  public loginForm: FormGroup;
  public submitAttempt: boolean = false;
  constructor(public formBuilder: FormBuilder, private webservice: WebServiceService,private route: ActivatedRoute,private router: Router) {
    this.loginForm = this.formBuilder.group({
      mobileno: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])],

     // password: ['', Validators.compose([Validators.required, Validators.pattern(RegexPattern.password)])]
     password: ['',Validators.compose([Validators.required])]
   }); 
   }

  ngOnInit() {
  }
  login() {
    this.submitAttempt = true;

    if (this.loginForm.valid) {
      let bodystring = {
        "mobileno": this.loginForm.get('mobileno').value,
        "password": this.loginForm.get('password').value,
      };
      this.webservice.login_user_get(bodystring)
        .then(response => {

          let data = JSON.stringify(response);

          console.log('login res -> ', response['result']);

          localStorage.setItem("userDetails", data);

          if (response[0] != 'No Record') {
            this.router.navigate(['/admin/charts/apex']);
          } else {
            console.log("Wrong Details");
          }
        }, (err) => {
          console.log("Error" + err);
        });

    }

  }

}
