import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choosedrive',
  templateUrl: './choosedrive.component.html',
  styleUrls: ['./choosedrive.component.sass']
})
export class ChoosedriveComponent {

  constructor(private router: Router) {}

  navigateToGoogleDrivePage() {
    this.router.navigate(['/googledrivepage']);
  }

  navigateToOneDrivePage() {
    this.router.navigate(['/onedrivepage']);
  }
}
