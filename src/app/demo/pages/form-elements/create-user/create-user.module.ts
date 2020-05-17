import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateUserComponent } from './create-user.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../../../providers/users/users.service';

@NgModule({
  imports: [
    CommonModule,
    CreateUserRoutingModule,
    SharedModule,
    NgbDropdownModule,
    HttpClientModule,
  ],
  declarations: [CreateUserComponent],
  providers: [UsersService]
})
export class CreateUserModule { }
