import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environment';
import { ShowHidePasswordDirective } from './show-hide-password.directive';
import { HeaderComponent } from 'src/Components/header/header.component';
import { SidebarRightComponent } from 'src/Components/sidebar-right/sidebar-right.component';
import { SideBarComponent } from 'src/Components/side-bar/side-bar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ShowHidePasswordDirective,
    HeaderComponent,
    SidebarRightComponent,
    SideBarComponent,
    MainComponent,
    HeaderComponent,
    SidebarRightComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: 'API_URL', useValue: environment.apiUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
