import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggestbrandComponent } from './biggestbrand.component';

describe('BiggestbrandComponent', () => {
  let component: BiggestbrandComponent;
  let fixture: ComponentFixture<BiggestbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiggestbrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiggestbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
