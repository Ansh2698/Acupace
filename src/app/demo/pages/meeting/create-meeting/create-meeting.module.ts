import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateMeetingRoutingModule } from './create-meeting-routing.module';
import { CreateMeetingComponent } from './create-meeting.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbPopoverModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {WebServiceService} from '../../../../providers/web-service/web-service.service'
@NgModule({
  declarations: [CreateMeetingComponent],
  imports: [
    CommonModule,
    CreateMeetingRoutingModule,
    SharedModule,
    NgbTabsetModule,
    NgbPopoverModule,
    NgbTooltipModule,
    ReactiveFormsModule
  ],
  providers:[WebServiceService]
})
export class CreateMeetingModule { }