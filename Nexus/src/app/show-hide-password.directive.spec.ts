import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowHidePasswordDirective } from './show-hide-password.directive';

describe('ShowHidePasswordDirective', () => {
  let directive: ShowHidePasswordDirective;
  let fixture: ComponentFixture<ShowHidePasswordDirective>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowHidePasswordDirective]
    });
    fixture = TestBed.createComponent(ShowHidePasswordDirective);
  });

  it('should toggle password visibility when clicked', () => {
    const inputEl = document.createElement('input');
    inputEl.type = 'password';
    const iconEl = document.createElement('i');
    iconEl.classList.add('far', 'fa-eye');

    fixture.nativeElement.appendChild(inputEl);
    fixture.nativeElement.appendChild(iconEl);

    const clickEvent = new Event('click');
    iconEl.dispatchEvent(clickEvent);

    expect(inputEl.type).toBe('text');

    iconEl.dispatchEvent(clickEvent);

    expect(inputEl.type).toBe('password');
  });
});
