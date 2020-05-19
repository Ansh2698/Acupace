import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
//import { VerificationComponent } from './verification/verification.component';
//import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  //declarations: [VerificationComponent],
  //declarations: [ProfileComponent]
})
export class AuthenticationModule { }
