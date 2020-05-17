import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGroupRoutingModule } from './create-group-routing.module';
import { CreateGroupComponent } from './create-group.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { GroupsService } from '../../../../providers/groups/groups.service';

@NgModule({
  imports: [
    CommonModule,
    CreateGroupRoutingModule,
    SharedModule,
    NgbDropdownModule,
    HttpClientModule,
  ],
  declarations: [CreateGroupComponent],
  providers: [GroupsService]
})
export class CreateGroupModule { }
