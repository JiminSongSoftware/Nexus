import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})



export class DashboardComponent {

  private _isLoggedIn = false
  constructor(private authService: AuthService) {
    this._isLoggedIn = this.authService.isLoggedIn();
  }
  
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

}
