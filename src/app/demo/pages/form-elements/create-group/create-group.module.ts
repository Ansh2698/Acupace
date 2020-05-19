import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGroupRoutingModule } from './create-group-routing.module';
import { CreateGroupComponent } from './create-group.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    CreateGroupRoutingModule,
    SharedModule,
    NgbDropdownModule
  ],
  declarations: [CreateGroupComponent]
})
export class CreateGroupModule { }