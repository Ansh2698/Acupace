import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { ToggleFullScreenDirective } from './theme/shared/full-screen/toggle-full-screen';
import { AuthGuardService} from './auth/auth-guard.service';
import {AuthRedirectService} from './auth/auth-redirect.service';
/* Menu Items */
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import {UserList} from '../app/demo/pages/form-elements/basic-elements/basic-elements'
import {WebServiceService} from './providers/web-service/web-service.service';
import { BaseComponent } from './theme/layout/base/base.component';
import {NgbPopoverModule, NgbProgressbarModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {MeetingLists} from './app-meeting_list';
import { from } from 'rxjs';
//import { TestingModule } from './testing/testing.module';

//import { NavBarModule } from './theme/layout/admin/nav-bar/nav-bar.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent,
    ToggleFullScreenDirective,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    NgbCarouselModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot()
    //NavBarModule,

    //TestingModule
  ],
  providers: [NavigationItem,WebServiceService,UserList,DeviceDetectorModule,AuthGuardService,AuthRedirectService,MeetingLists],
  bootstrap: [AppComponent]
})
export class AppModule { }