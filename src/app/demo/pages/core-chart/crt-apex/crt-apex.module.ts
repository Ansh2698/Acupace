import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebServiceService} from '../../../../providers/web-service/web-service.service';
import { CrtApexRoutingModule } from './crt-apex-routing.module';
import { CrtApexComponent } from './crt-apex.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {MeetingLists} from '../../../../app-meeting_list';
import {NgxSpinnerModule } from "ngx-spinner";  
@NgModule({
  declarations: [CrtApexComponent],
  imports: [
    CommonModule,
    CrtApexRoutingModule,
    SharedModule,
    NgxSpinnerModule
  ],
  providers:[MeetingLists,WebServiceService]
})
export class CrtApexModule { }
