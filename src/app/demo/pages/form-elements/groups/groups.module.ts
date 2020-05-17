import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbButtonsModule, NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { GroupsService } from '../../../../providers/groups/groups.service';




@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbButtonsModule,
    NgbTooltipModule,
    HttpClientModule,
  ],
  providers:[GroupsService],
  declarations: [GroupsComponent]
})
export class GroupsModule { }
