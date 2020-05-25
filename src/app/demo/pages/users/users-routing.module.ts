import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user-list',
        loadChildren: () => import('./user-list/user-list.module').then(module => module.UserListModule)
      },
      {
        path:'create-user',
        loadChildren: () => import('./create-user/create-user.module').then(module => module.CreateUserModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
