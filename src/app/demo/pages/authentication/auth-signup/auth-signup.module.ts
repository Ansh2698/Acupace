import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthSignupRoutingModule } from './auth-signup-routing.module';
import { AuthSignupComponent } from './auth-signup.component';
import {WebServiceService} from '../../../../providers/web-service/web-service.service'
@NgModule({
  imports: [
    CommonModule,
    AuthSignupRoutingModule,
    ReactiveFormsModule
  ],
  providers:[WebServiceService],
  declarations: [AuthSignupComponent]
})
export class AuthSignupModule { }


