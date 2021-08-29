import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BEAUTYComponent } from './beauty.component';

describe('BEAUTYComponent', () => {
  let component: BEAUTYComponent;
  let fixture: ComponentFixture<BEAUTYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BEAUTYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BEAUTYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
