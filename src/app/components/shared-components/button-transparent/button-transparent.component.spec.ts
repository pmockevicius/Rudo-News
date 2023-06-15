import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTransparentComponent } from './button-transparent.component';

describe('ButtonTransparentComponent', () => {
  let component: ButtonTransparentComponent;
  let fixture: ComponentFixture<ButtonTransparentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonTransparentComponent]
    });
    fixture = TestBed.createComponent(ButtonTransparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
