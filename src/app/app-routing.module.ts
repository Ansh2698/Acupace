import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';
import { BaseComponent } from './theme/layout/base/base.component';
import {AuthGuardService} from './auth/auth-guard.service'
import {AuthRedirectService} from './auth/auth-redirect.service'
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',

      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.module').then(module => module.LayoutModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./demo/pages/users/users.module').then(module => module.UsersModule)
      },
      {
        path: 'groups',
        loadChildren: () => import('./demo/pages/groups/groups.module').then(module => module.GroupsModule)
      },
      {
        path: 'tbl-bootstrap',
        loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
      },
      {
        path: 'overview',
        loadChildren: () => import('./demo/pages/overview/overview.module').then(module => module.OverviewModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
      {
        path:'profile',
        loadChildren: () => import('./demo/pages/authentication/profile/profile.module').then(module => module.ProfileModule)
      },
      {
        path:'meeting',
        loadChildren: () => import('./demo/pages/meeting/meeting.module').then(module => module.MeetingModule)
      },
      {
        path:'about-us',
        loadChildren: ()=> import('./demo/pages/about-us/about-us.module').then(module=>module.AboutUsModule)
      },
      {
        path:'faq',
        loadChildren: ()=> import('./demo/pages/faq/faq.module').then(module=>module.FaqModule)
      }
    ]
  },
  {
    path: 'admin',
    component: AuthComponent,
    canActivate:[AuthRedirectService],
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./demo/pages/maintenance/maintenance.module').then(module => module.MaintenanceModule)
      }
    ]
  },
  {
    path:'',
    component:BaseComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
