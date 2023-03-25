import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnedrivepageComponent } from './onedrivepage.component';

describe('OnedrivepageComponent', () => {
  let component: OnedrivepageComponent;
  let fixture: ComponentFixture<OnedrivepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnedrivepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnedrivepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
