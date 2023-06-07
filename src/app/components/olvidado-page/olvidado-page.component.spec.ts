import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidadoPageComponent } from './olvidado-page.component';

describe('OlvidadoPageComponent', () => {
  let component: OlvidadoPageComponent;
  let fixture: ComponentFixture<OlvidadoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OlvidadoPageComponent]
    });
    fixture = TestBed.createComponent(OlvidadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
