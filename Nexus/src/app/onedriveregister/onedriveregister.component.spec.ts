import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnedriveregisterComponent } from './onedriveregister.component';

describe('OnedriveregisterComponent', () => {
  let component: OnedriveregisterComponent;
  let fixture: ComponentFixture<OnedriveregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnedriveregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnedriveregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
