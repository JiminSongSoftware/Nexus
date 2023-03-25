import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main_components/main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogledrivepageComponent } from './googledrivepage/googledrivepage.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'dashboard', component: MainComponent },
      { path: 'shared', component: GoogledrivepageComponent },
      { path: 'help', component: HelpComponent },
    ],
  } as any,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
