import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedriveregisterComponent } from './choosedriveregister.component';

describe('ChoosedriveregisterComponent', () => {
  let component: ChoosedriveregisterComponent;
  let fixture: ComponentFixture<ChoosedriveregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosedriveregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosedriveregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
