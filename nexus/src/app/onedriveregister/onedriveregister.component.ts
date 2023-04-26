import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-onedriveregister',
  templateUrl: './onedriveregister.component.html',
  styleUrls: ['./onedriveregister.component.sass']
})
export class OnedriveregisterComponent {
  clientId: string = '';
  apiKey: string = '';
  errorMessage: string = '';

  // name: string = '';
  // email: string = '';
  // password: string = '';
  // confirmPassword: string = '';

  constructor(private http: HttpClient, @Inject('API_URL') private apiUrl: string, private router: Router) {}

  register() {
    // if (this.password !== this.confirmPassword) {
    //   this.errorMessage = "Passwords do not match";
    //   return;
    // }

    // Implement your registration logic here
    // const body = {
    //   name: this.name,
    //   email: this.email,
    //   password: this.password
    // };

    // this.http.post(`${this.apiUrl}/register`, body).subscribe(
    //   (response: any) => {
          this.router.navigate(['/login']);
    //   },
    //   (error: HttpErrorResponse) => {
    //     this.errorMessage = error.error.message || 'An error occurred during registration';
    //   }
    // );
  }
}
