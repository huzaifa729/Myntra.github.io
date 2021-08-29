import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrComponent } from './str.component';

describe('StrComponent', () => {
  let component: StrComponent;
  let fixture: ComponentFixture<StrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
