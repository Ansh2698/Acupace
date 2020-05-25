import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAgoraModule } from 'ngx-agora';
import { JoinMeetingRoutingModule } from './join-meeting-routing.module';
import { JoinMeetingComponent } from './join-meeting.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {WebServiceService} from '../../../../providers/web-service/web-service.service'
@NgModule({
  declarations: [JoinMeetingComponent],
  imports: [
    CommonModule,
    JoinMeetingRoutingModule,
    SharedModule,
    NgxAgoraModule.forRoot({AppID: 'c023596a5f6d4c949d9b207101ee8c74' })
  ],
  providers:[WebServiceService],
  bootstrap: [JoinMeetingComponent]
})
export class JoinMeetingModule { }
