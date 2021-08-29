import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HutsComponent } from './huts.component';

describe('HutsComponent', () => {
  let component: HutsComponent;
  let fixture: ComponentFixture<HutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
