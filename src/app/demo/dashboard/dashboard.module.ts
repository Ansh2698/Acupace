import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import { AuthenticationRoutingModule } from '.././pages/authentication/authentication-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    AuthenticationRoutingModule

  ]
})
export class DashboardModule { }
