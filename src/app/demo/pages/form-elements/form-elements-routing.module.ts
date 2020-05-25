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
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormElementsRoutingModule { }
