import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TkComponent } from './tk.component';

describe('TkComponent', () => {
  let component: TkComponent;
  let fixture: ComponentFixture<TkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
