import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {WebServiceService} from '../../../../providers/web-service/web-service.service';

import {InputEditorModule} from 'angular-inline-editors'; // inline editor
import { SelectEditorModule } from 'angular-inline-editors'; // inline editor


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    InputEditorModule.forRoot(),
    SelectEditorModule.forRoot()
  ],
  declarations: [ProfileComponent],
  providers:[WebServiceService],
})
export class ProfileModule { }
