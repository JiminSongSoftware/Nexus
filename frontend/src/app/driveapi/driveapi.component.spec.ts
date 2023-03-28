import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveapiComponent } from './driveapi.component';

describe('DriveapiComponent', () => {
  let component: DriveapiComponent;
  let fixture: ComponentFixture<DriveapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriveapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
