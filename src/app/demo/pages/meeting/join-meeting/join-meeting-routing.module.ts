import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JoinMeetingComponent} from './join-meeting.component';

const routes: Routes = [
  {
    path: '',
    component: JoinMeetingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinMeetingRoutingModule { }
