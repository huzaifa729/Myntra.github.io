import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShppingsComponent } from './shppings.component';

describe('ShppingsComponent', () => {
  let component: ShppingsComponent;
  let fixture: ComponentFixture<ShppingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShppingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
