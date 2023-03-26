import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChooseDriveRegisterComponent } from './choosedriveregister/choosedriveregister.component';
import { GoogledriveregisterComponent } from './googledriveregister/googledriveregister.component';
import { OnedriveregisterComponent } from './onedriveregister/onedriveregister.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from '../main_components/main/main.component';
import { ChoosedriveComponent } from './choosedrive/choosedrive.component';
import { GoogledrivepageComponent } from './googledrivepage/googledrivepage.component';
import { OnedrivepageComponent } from './onedrivepage/onedrivepage.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingComponent } from './setting/setting.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'choosedriveregister', component: ChooseDriveRegisterComponent },
  { path: 'googledriveregister', component: GoogledriveregisterComponent },
  { path: 'onedriveregister', component: OnedriveregisterComponent },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'dashboard', component: MainComponent },
      { path: 'shared', component: ChoosedriveComponent },
      { path: 'googledrivepage', component: GoogledrivepageComponent },
      { path: 'onedrivepage', component: OnedrivepageComponent },
      { path: 'analytics', component: AnalyticsComponent},
      { path: 'setting', component: SettingComponent},
      { path: 'help', component: HelpComponent },
    ],
  } as any,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
