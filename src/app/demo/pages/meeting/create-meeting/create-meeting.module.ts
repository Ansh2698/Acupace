import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateMeetingRoutingModule } from './create-meeting-routing.module';
import { CreateMeetingComponent } from './create-meeting.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbPopoverModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CreateMeetingComponent],
  imports: [
    CommonModule,
    CreateMeetingRoutingModule,
    SharedModule,
    NgbTabsetModule,
    NgbPopoverModule,
    NgbTooltipModule
  ]
})
export class CreateMeetingModule { }
