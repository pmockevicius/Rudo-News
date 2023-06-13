import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWFloatingLabelComponent } from './input-w-floating-label.component';

describe('InputWFloatingLabelComponent', () => {
  let component: InputWFloatingLabelComponent;
  let fixture: ComponentFixture<InputWFloatingLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputWFloatingLabelComponent]
    });
    fixture = TestBed.createComponent(InputWFloatingLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
