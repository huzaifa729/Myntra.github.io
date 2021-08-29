import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterComponent } from './ster.component';

describe('SterComponent', () => {
  let component: SterComponent;
  let fixture: ComponentFixture<SterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
