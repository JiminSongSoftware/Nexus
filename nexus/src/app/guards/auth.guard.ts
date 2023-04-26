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
  ) {
    // Add window resize event listener
    window.addEventListener('resize', this.checkMobile.bind(this));
  }

  canActivate(): boolean {
    console.log('AuthGuard: canActivate called');
    console.log('AuthGuard: isLoggedIn: ' + this.authService.isLoggedIn());
    console.log('AuthGuard: token: ' + localStorage.getItem('token'));
    const isMobile = window.innerWidth < 768; // Change this threshold to your desired value
    if (this.authService.isLoggedIn() && !isMobile) {
      return true;
    } else {
      localStorage.removeItem('token'); // clear invalid token from local storage
      this.router.navigate(['/landing_page']);
      return false;
    }
  }

  // Method to check if screen is mobile and navigate to landing page if necessary
  private checkMobile() {
    const isMobile = window.innerWidth < 768; // Change this threshold to your desired value
    if (isMobile) {
      this.router.navigate(['/landing_page']);
    }
  }
}
