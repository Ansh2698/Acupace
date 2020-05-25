import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupListComponent} from './group-list.component';

const routes: Routes = [
  {
    path: '',
    component: GroupListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupListRoutingModule { }
