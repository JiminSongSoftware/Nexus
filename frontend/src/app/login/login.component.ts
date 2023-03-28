import { Component, ElementRef, ViewChild, AfterViewInit, Inject, Injectable } from '@angular/core';
import { ShowHidePasswordDirective } from '../show-hide-password.directive';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

interface LoginResponse {
  token: string;
  access_token: string;
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
  errorMessage: string = '';
  private _isLoggedIn = false;
      
  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string, private authService: AuthService, private router: Router) {}
  
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  onSubmit() {   
    const url = `${this.apiUrl}api/login`;
    const body = { email: this.email, password: this.password };
    this.http.post(url, body).subscribe({
      next: (response: Object) => {
        const loginResponse = response as LoginResponse;
        console.log('response:', response); // log the entire response object
        localStorage.setItem('token', loginResponse.access_token);
        this.router.navigate(['/dashboard']);
        // handle successful login response
      },
      error: (error: HttpErrorResponse) => {
        // handle login error response
        if (error.status === 401) {
          this.errorMessage = 'Invalid email/password';
        } else {
          this.errorMessage = 'An error occurred.';
        }
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