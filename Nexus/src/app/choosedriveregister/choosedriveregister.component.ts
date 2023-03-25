import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choosedriveregister',
  templateUrl: './choosedriveregister.component.html',
  styleUrls: ['./choosedriveregister.component.sass']
})
export class ChooseDriveRegisterComponent {

  constructor(private router: Router) {}

  navigateToGoogleDriveRegister() {
    this.router.navigate(['/googledriveregister']);
  }

  navigateToOneDriveRegister() {
    this.router.navigate(['/onedriveregister']);
  }
}
