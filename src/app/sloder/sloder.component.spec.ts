import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloderComponent } from './sloder.component';

describe('SloderComponent', () => {
  let component: SloderComponent;
  let fixture: ComponentFixture<SloderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SloderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SloderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
