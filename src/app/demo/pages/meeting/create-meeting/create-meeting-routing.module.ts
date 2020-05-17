import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateMeetingComponent} from './create-meeting.component';

const routes: Routes = [
  {
    path:'',
    component:CreateMeetingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateMeetingRoutingModule { }