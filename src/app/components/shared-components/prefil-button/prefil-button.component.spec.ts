import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefilButtonComponent } from './prefil-button.component';

describe('PrefilButtonComponent', () => {
  let component: PrefilButtonComponent;
  let fixture: ComponentFixture<PrefilButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrefilButtonComponent]
    });
    fixture = TestBed.createComponent(PrefilButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
