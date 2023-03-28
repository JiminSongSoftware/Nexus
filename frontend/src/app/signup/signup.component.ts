import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = "Passwords do not match";
      return;
    }

    // Implement your registration logic here
    const body = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.http.post(`${this.apiUrl}api/signup`, body).subscribe(
      (response: any) => {
        // Registration successful, navigate to the choosedriveregister page
        this.router.navigate(['/choosedriveregister']);
      },
      (error: HttpErrorResponse) => {
        // Handle error response
        this.errorMessage = error.error.message || 'An error occurred during registration';
      }
    );
  }
}
