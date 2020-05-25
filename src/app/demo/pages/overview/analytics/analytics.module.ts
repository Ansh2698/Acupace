import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebServiceService} from '../../../../providers/web-service/web-service.service';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {MeetingLists} from '../../../../app-meeting_list';
import {NgxSpinnerModule } from "ngx-spinner";  
@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    SharedModule,
    NgxSpinnerModule
  ],
  providers:[MeetingLists,WebServiceService]
})
export class AnalyticsModule { }
