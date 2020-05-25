import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [

      {
        path:'group-list',
        loadChildren: () => import('./group-list/group-list.module').then(module => module.GroupListModule)
      },
      {
        path:'create-group',
        loadChildren: () => import('./create-group/create-group.module').then(module => module.CreateGroupModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
