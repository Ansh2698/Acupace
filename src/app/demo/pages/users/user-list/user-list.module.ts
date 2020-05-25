import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { UserList } from './user-list';
import {MeetingLists} from '../../../../app-meeting_list';
@NgModule({
  imports: [
    CommonModule,
    UserListRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  providers:[UserList,MeetingLists],
  declarations: [UserListComponent]
})
export class UserListModule { }
