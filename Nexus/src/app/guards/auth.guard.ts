import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    console.log('AuthGuard: canActivate called');
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      localStorage.removeItem('token'); // clear invalid token from local storage
      this.router.navigate(['/']);
      return false;
    }
  }
}
