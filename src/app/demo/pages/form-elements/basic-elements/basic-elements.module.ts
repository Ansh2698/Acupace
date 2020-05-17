import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicElementsRoutingModule } from './basic-elements-routing.module';
import { BasicElementsComponent } from './basic-elements.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbButtonsModule, NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
//import { UserList } from './basic-elements';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../../../providers/users/users.service';


@NgModule({
  imports: [
    CommonModule,
    BasicElementsRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbButtonsModule,
    NgbTooltipModule,
    HttpClientModule,
  ],
  providers:[UsersService],
  declarations: [BasicElementsComponent]
})
export class BasicElementsModule { }
