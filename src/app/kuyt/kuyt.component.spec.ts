import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuytComponent } from './kuyt.component';

describe('KuytComponent', () => {
  let component: KuytComponent;
  let fixture: ComponentFixture<KuytComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KuytComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KuytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
