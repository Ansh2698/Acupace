import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'coming-soon',
        loadChildren: () => import('./mainten-coming-soon/mainten-coming-soon.module').then(module => module.MaintenComingSoonModule)
      },
      {
        path: 'error',
        loadChildren: () => import('./mainten-error/mainten-error.module').then(module => module.MaintenErrorModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
