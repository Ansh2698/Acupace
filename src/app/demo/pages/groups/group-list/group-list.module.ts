import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListRoutingModule } from './group-list-routing.module';
import { GroupListComponent } from './group-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    GroupListRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [GroupListComponent]
})
export class GroupListModule { }
