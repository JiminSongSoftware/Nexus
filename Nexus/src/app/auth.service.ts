import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    interface DecodedToken {
      exp: number;
      // Add other properties here if necessary
    }    
    try {
      const decodedToken: any = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) { // Compare exp property with currentTime
        this.logout();
        return false;
      }
    } catch (e) {
      this.logout();
      return false;
    }
    return true;
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
