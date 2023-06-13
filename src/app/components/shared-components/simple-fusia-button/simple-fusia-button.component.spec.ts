import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFusiaButtonComponent } from './simple-fusia-button.component';

describe('SimpleFusiaButtonComponent', () => {
  let component: SimpleFusiaButtonComponent;
  let fixture: ComponentFixture<SimpleFusiaButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleFusiaButtonComponent]
    });
    fixture = TestBed.createComponent(SimpleFusiaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
