import { Component, ElementRef, ViewChild, AfterViewInit, Inject, Injectable } from '@angular/core';
import { ShowHidePasswordDirective } from '../show-hide-password.directive';
import { environment } from 'src/environment';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

interface LoginResponse {
  token: string;
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

@Injectable({
  providedIn: 'root'
})

export class LoginComponent implements AfterViewInit {
  @ViewChild(ShowHidePasswordDirective)
  private showHidePasswordDirective!: ShowHidePasswordDirective;
  @ViewChild('passwordInput')
  private passwordInput!: ElementRef;
  email: any;
  password: any;
  private _isLoggedIn = false;
      

  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string, private authService: AuthService, private router: Router) {}
  
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  onSubmit() {
    const url = `${this.apiUrl}/auth/login`;
    const body = { email: this.email, password: this.password };
    this.http.post(url, body).subscribe({
      next: (response: Object) => {
        const loginResponse = response as LoginResponse;
        localStorage.setItem('token', loginResponse.token);
        this.router.navigate(['/dashboard']);
        // handle successful login response, such as storing user data in session/local storage or redirecting to a new page
      },
      error: (error: any) => {
        // handle login error response, such as displaying an error message to the user
      }
    });
  }
  
  register() {
    const url = `${this.apiUrl}/auth/registration`;;
    const body = { email: this.email, password: this.password };
    this.http.post(url, body).subscribe({
      next: data => {
        // handle successful login response, such as storing user data in session/local storage or redirecting to a new page
      },
      error: error => {
        // handle login error response, such as displaying an error message to the user
      }
    });
  }
  
  

  ngAfterViewInit() {
    if (this.passwordInput) {
      const passwordInputEl = this.passwordInput.nativeElement;
      passwordInputEl.addEventListener('blur', () => {
        const iconEl = this.showHidePasswordDirective.el.nativeElement.querySelector('i');
        passwordInputEl.type = 'password';
        iconEl.classList.remove(this.showHidePasswordDirective.eyeSlashIconClass);
        iconEl.classList.add(this.showHidePasswordDirective.eyeIconClass);
      });
    }
  }
}  
