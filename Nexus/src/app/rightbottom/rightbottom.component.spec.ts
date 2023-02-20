import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightbottomComponent } from './rightbottom.component';

describe('RightbottomComponent', () => {
  let component: RightbottomComponent;
  let fixture: ComponentFixture<RightbottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightbottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
