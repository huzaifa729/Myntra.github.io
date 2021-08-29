import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooessComponent } from './fooess.component';

describe('FooessComponent', () => {
  let component: FooessComponent;
  let fixture: ComponentFixture<FooessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
