import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path:'',
      children: [
        {
          path: 'create-meeting',
          loadChildren: () => import('./create-meeting/create-meeting.module').then(module => module.CreateMeetingModule)
        },
        {
          path: 'join-meeting',
          loadChildren: () => import('./join-meeting/join-meeting.module').then(module => module.JoinMeetingModule)
        },
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingRoutingModule { }
