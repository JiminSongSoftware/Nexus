import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ShowHidePasswordDirective } from '../show-hide-password.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements AfterViewInit {
  @ViewChild(ShowHidePasswordDirective)
  private showHidePasswordDirective!: ShowHidePasswordDirective;
  @ViewChild('passwordInput')
  private passwordInput!: ElementRef;

  ngAfterViewInit() {
    const passwordInputEl = this.passwordInput.nativeElement;
    passwordInputEl.addEventListener('blur', () => {
      const iconEl =
        this.showHidePasswordDirective.el.nativeElement.querySelector('i');
      passwordInputEl.type = 'password';
      iconEl.classList.remove(this.showHidePasswordDirective.eyeSlashIconClass);
      iconEl.classList.add(this.showHidePasswordDirective.eyeIconClass);
    });
  }
}
