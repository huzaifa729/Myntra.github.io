import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsclothesComponent } from './brandsclothes.component';

describe('BrandsclothesComponent', () => {
  let component: BrandsclothesComponent;
  let fixture: ComponentFixture<BrandsclothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsclothesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
