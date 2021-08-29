import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslideComponent } from './newslide.component';

describe('NewslideComponent', () => {
  let component: NewslideComponent;
  let fixture: ComponentFixture<NewslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewslideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
