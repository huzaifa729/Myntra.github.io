import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifComponent } from './rif.component';

describe('RifComponent', () => {
  let component: RifComponent;
  let fixture: ComponentFixture<RifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
