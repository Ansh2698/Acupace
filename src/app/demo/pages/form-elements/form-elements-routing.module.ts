import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        loadChildren: () => import('./basic-elements/basic-elements.module').then(module => module.BasicElementsModule)
      },
      {
        path:'create',
        loadChildren: () => import('./create-user/create-user.module').then(module => module.CreateUserModule)
      },
      {
        path:'groups',
        loadChildren: () => import('./groups/groups.module').then(module => module.GroupsModule)
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
export class FormElementsRoutingModule { }
