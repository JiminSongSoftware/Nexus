import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedriveComponent } from './choosedrive.component';

describe('ChoosedriveComponent', () => {
  let component: ChoosedriveComponent;
  let fixture: ComponentFixture<ChoosedriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosedriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosedriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
