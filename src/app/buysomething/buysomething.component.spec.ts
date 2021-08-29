import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysomethingComponent } from './buysomething.component';

describe('BuysomethingComponent', () => {
  let component: BuysomethingComponent;
  let fixture: ComponentFixture<BuysomethingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuysomethingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuysomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
