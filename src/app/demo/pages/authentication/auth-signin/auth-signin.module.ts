import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthSigninRoutingModule } from './auth-signin-routing.module';
import { AuthSigninComponent } from './auth-signin.component';
import {WebServiceService} from '../../../../providers/web-service/web-service.service'
@NgModule({
  imports: [
    CommonModule,
    AuthSigninRoutingModule,
    ReactiveFormsModule
  ],
  providers:[WebServiceService],
  declarations: [AuthSigninComponent]
})
export class AuthSigninModule { }