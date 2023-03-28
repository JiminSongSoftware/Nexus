import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-googledriveregister',
  templateUrl: './googledriveregister.component.html',
  styleUrls: ['./googledriveregister.component.sass']
})
export class GoogledriveregisterComponent {
  clientId: string = '';
  apiKey: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string, private router: Router) {}

  register() {
    // Implement your registration logic here
    const body = {
      clientId: this.clientId,
      apiKey: this.apiKey
    };

    this.http.post(`${this.apiUrl}/googledrive/register`, body).subscribe(
      (response: any) => {
        // Registration successful, navigate to the login page
        this.router.navigate(['/login']);
      },
      (error: HttpErrorResponse) => {
        // Handle error response
        this.errorMessage = error.error.message || 'An error occurred during registration';
      }
    );
  }
}
