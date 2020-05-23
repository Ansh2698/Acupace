import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {WebServiceService} from '../../../../providers/web-service/web-service.service'
import { NgxSpinnerModule } from "ngx-spinner";  
@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers:[WebServiceService],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
