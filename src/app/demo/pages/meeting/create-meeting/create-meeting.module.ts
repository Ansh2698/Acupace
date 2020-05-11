import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateMeetingRoutingModule } from './create-meeting-routing.module';
import { CreateMeetingComponent } from './create-meeting.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
@NgModule({
  declarations: [CreateMeetingComponent],
  imports: [
    CommonModule,
    CreateMeetingRoutingModule,
    SharedModule
  ]
})
export class CreateMeetingModule { }
