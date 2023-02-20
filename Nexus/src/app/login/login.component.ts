import { Component, ElementRef, ViewChild, AfterViewInit, Inject, Injectable } from '@angular/core';
import { ShowHidePasswordDirective } from '../show-hide-password.directive';
import { environment } from 'src/environment';
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

  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string) {}

  onSubmit() {
    const url = `${this.apiUrl}/auth/login`;
    const body = { email: this.email, password: this.password };
    this.http.post(url, body).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
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
    this.http.get(url).subscribe({
      next: data => {
        // handle successful login response, such as storing user data in session/local storage or redirecting to a new page
      },
      error: error => {
        // handle login error response, such as displaying an error message to the user
      }
    });
  }
  
  

  ngAfterViewInit() {
    const passwordInputEl = this.passwordInput.nativeElement;
    passwordInputEl.addEventListener('blur', () => {
      const iconEl = this.showHidePasswordDirective.el.nativeElement.querySelector('i');
      passwordInputEl.type = 'password';
      iconEl.classList.remove(this.showHidePasswordDirective.eyeSlashIconClass);
      iconEl.classList.add(this.showHidePasswordDirective.eyeIconClass);
    });
  }
}
