import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidadaDialogComponent } from './olvidada-dialog.component';

describe('OlvidadaDialogComponent', () => {
  let component: OlvidadaDialogComponent;
  let fixture: ComponentFixture<OlvidadaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OlvidadaDialogComponent]
    });
    fixture = TestBed.createComponent(OlvidadaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
