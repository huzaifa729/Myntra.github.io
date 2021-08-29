import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilsaComponent } from './milsa.component';

describe('MilsaComponent', () => {
  let component: MilsaComponent;
  let fixture: ComponentFixture<MilsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
