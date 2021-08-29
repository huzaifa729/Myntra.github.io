import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KIDSComponent } from './kids.component';

describe('KIDSComponent', () => {
  let component: KIDSComponent;
  let fixture: ComponentFixture<KIDSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KIDSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KIDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
