import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BUYSComponent } from './buys.component';

describe('BUYSComponent', () => {
  let component: BUYSComponent;
  let fixture: ComponentFixture<BUYSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BUYSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BUYSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
