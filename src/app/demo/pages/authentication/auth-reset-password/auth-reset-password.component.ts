import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { WebServiceService } from '../../../../providers/web-service/web-service.service';
import { Router, ActivatedRoute, ParamMap,NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-auth-reset-password',
  templateUrl: './auth-reset-password.component.html',
  styleUrls: ['./auth-reset-password.component.scss']
})
export class AuthResetPasswordComponent implements OnInit {

  public resetForm: FormGroup;
  public submitAttempt: boolean = false;
  show: boolean = true;
  bodystring: any;
  data: any;
  customer_mobileno: any;

  constructor(public formBuilder: FormBuilder, private webservice: WebServiceService,private route: ActivatedRoute,private router: Router) { 
   this.resetForm = this.formBuilder.group({
      mobile: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])]
   });
   }

  

  ngOnInit() {
  }

  ResetPass() {
    this.submitAttempt = true;
      let bodystring = {
        "mobileno": this.resetForm.get('mobile').value,
        
      };
      this.webservice.forgotPassword(bodystring)
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
