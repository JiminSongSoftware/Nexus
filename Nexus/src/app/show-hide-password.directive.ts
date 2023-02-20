import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowHidePassword]'
})
export class ShowHidePasswordDirective {

  private inputType = 'password';
  public eyeIconClass = 'fa fa-eye';
  public eyeSlashIconClass = 'fa fa-eye-slash';

  constructor(public el: ElementRef) { }

  @HostListener('click')
  onClick() {
    const nativeEl = this.el.nativeElement;
    const inputEl = nativeEl.querySelector('input');
    const iconEl = nativeEl.querySelector('i');

    if (inputEl && iconEl) {
      if (inputEl.type === this.inputType) {
        inputEl.type = 'text';
        iconEl.classList.remove(this.eyeIconClass);
        iconEl.classList.add(this.eyeSlashIconClass);
      } else {
        inputEl.type = this.inputType;
        iconEl.classList.remove(this.eyeSlashIconClass);
        iconEl.classList.add(this.eyeIconClass);
      }
    }
  }
}
