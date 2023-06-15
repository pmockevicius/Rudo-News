import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrasenaInputWEyeComponent } from './contrasena-input-w-eye.component';

describe('ContrasenaInputWEyeComponent', () => {
  let component: ContrasenaInputWEyeComponent;
  let fixture: ComponentFixture<ContrasenaInputWEyeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContrasenaInputWEyeComponent]
    });
    fixture = TestBed.createComponent(ContrasenaInputWEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
