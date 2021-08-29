import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoplComponent } from './kopl.component';

describe('KoplComponent', () => {
  let component: KoplComponent;
  let fixture: ComponentFixture<KoplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
