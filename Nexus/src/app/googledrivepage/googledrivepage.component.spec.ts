import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogledrivepageComponent } from './googledrivepage.component';

describe('GoogledrivepageComponent', () => {
  let component: GoogledrivepageComponent;
  let fixture: ComponentFixture<GoogledrivepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogledrivepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogledrivepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
