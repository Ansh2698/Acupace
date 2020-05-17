import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeetingRoutingModule } from './meeting-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MeetingRoutingModule,
    SharedModule
  ]
})
export class MeetingModule { }