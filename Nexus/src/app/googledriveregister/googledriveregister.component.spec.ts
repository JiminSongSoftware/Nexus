import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogledriveregisterComponent } from './googledriveregister.component';

describe('GoogledriveregisterComponent', () => {
  let component: GoogledriveregisterComponent;
  let fixture: ComponentFixture<GoogledriveregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogledriveregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogledriveregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
