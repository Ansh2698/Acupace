import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAgoraModule } from 'ngx-agora';
import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {WebServiceService} from '../../../providers/web-service/web-service.service'
@NgModule({
  declarations: [SamplePageComponent],
  imports: [
    CommonModule,
    SamplePageRoutingModule,
    SharedModule,
    NgxAgoraModule.forRoot({AppID: 'c023596a5f6d4c949d9b207101ee8c74' })
  ],
  providers:[WebServiceService],
  bootstrap: [SamplePageComponent]
})
export class SamplePageModule { }
