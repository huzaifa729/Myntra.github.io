import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikComponent } from './hik.component';

describe('HikComponent', () => {
  let component: HikComponent;
  let fixture: ComponentFixture<HikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
