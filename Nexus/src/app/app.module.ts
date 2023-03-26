//@angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// 3rd party libraries
import { CarouselModule } from 'ngx-owl-carousel-o';

// routing & environment
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

// components & directives
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShowHidePasswordDirective } from './show-hide-password.directive';
import { ChooseDriveRegisterComponent } from './choosedriveregister/choosedriveregister.component';
import { GoogledriveregisterComponent } from './googledriveregister/googledriveregister.component';
import { OnedriveregisterComponent } from './onedriveregister/onedriveregister.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from 'src/main_components/header/header.component';
import { LeftSideBarComponent } from 'src/main_components/left-side-bar/left-side-bar.component';
import { MainComponent } from 'src/main_components/main/main.component';
import { RightSidebarComponent } from 'src/main_components/right-sidebar/right-sidebar.component';
import { ChoosedriveComponent } from './choosedrive/choosedrive.component';
import { GoogledrivepageComponent } from './googledrivepage/googledrivepage.component';
import { OnedrivepageComponent } from './onedrivepage/onedrivepage.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingComponent } from './setting/setting.component';
import { HelpComponent } from './help/help.component';
import { ThreeViewerComponent } from './three-viewer/three-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ShowHidePasswordDirective,
    ChooseDriveRegisterComponent,
    GoogledriveregisterComponent,
    OnedriveregisterComponent,
    DashboardComponent,
    HeaderComponent,
    LeftSideBarComponent,
    MainComponent,
    RightSidebarComponent,
    ChoosedriveComponent,
    GoogledrivepageComponent,
    OnedrivepageComponent,
    AnalyticsComponent,
    SettingComponent,
    HelpComponent,
    ThreeViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
  ],
  providers: [{ provide: 'API_URL', useValue: environment.apiUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
