import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RighttopComponent } from './righttop.component';

describe('RighttopComponent', () => {
  let component: RighttopComponent;
  let fixture: ComponentFixture<RighttopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RighttopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RighttopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
