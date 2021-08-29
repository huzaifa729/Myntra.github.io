import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesdealComponent } from './shoesdeal.component';

describe('ShoesdealComponent', () => {
  let component: ShoesdealComponent;
  let fixture: ComponentFixture<ShoesdealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoesdealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
