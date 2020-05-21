import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {WebServiceService} from '../../../../providers/web-service/web-service.service'
@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  providers:[WebServiceService],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
