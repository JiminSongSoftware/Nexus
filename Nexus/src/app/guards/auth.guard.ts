import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      if (state.url === '/') {
        // Redirect to dashboard if user is already logged in and trying to access login page
        this.router.navigate(['/dashboard']);
        return false;
      }
      // Allow access to requested page if user is already logged in
      return true;
    } else {
      // Redirect to login page if user is not logged in
      this.router.navigate(['/']);
      return false;
    }
  }
}
