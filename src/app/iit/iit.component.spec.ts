import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IITComponent } from './iit.component';

describe('IITComponent', () => {
  let component: IITComponent;
  let fixture: ComponentFixture<IITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IITComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
