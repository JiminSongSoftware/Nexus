import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  currentUser!: User;
  changePasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) {
    this.changePasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    // Load the current user's data (replace this with a real API call)
    this.currentUser = {
      name: 'Ji Min Song',
      email: 'jiminsong.software@gmail.com',
    };
  }

  onChangePassword(): void {
    if (this.changePasswordForm.valid) {
      const newPassword = this.changePasswordForm.get('newPassword')?.value;
      const confirmPassword = this.changePasswordForm.get('confirmPassword')?.value;

      if (newPassword === confirmPassword) {
        // Call your API to update the password here
        console.log('Password updated:', newPassword);
      } else {
        console.error('Passwords do not match');
      }
    } else {
      console.error('Invalid form data');
    }
  }
 
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
