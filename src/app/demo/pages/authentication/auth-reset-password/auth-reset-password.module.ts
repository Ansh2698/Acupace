import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthResetPasswordRoutingModule } from './auth-reset-password-routing.module';
import { AuthResetPasswordComponent } from './auth-reset-password.component';
import {WebServiceService} from '../../../../providers/web-service/web-service.service'
@NgModule({
  imports: [
    CommonModule,
    AuthResetPasswordRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AuthResetPasswordComponent],
  providers: [WebServiceService]
})
export class AuthResetPasswordModule { }
