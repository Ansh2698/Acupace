import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAgoraModule } from 'ngx-agora';
import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';
import {SharedModule} from '../../../theme/shared/shared.module';


@NgModule({
  declarations: [SamplePageComponent],
  imports: [
    CommonModule,
    SamplePageRoutingModule,
    SharedModule,
    NgxAgoraModule.forRoot({AppID: 'c023596a5f6d4c949d9b207101ee8c74' }),

  ],
  bootstrap: [SamplePageComponent]
})
export class SamplePageModule { }