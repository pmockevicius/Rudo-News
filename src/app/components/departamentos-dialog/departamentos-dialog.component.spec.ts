import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosDialogComponent } from './departamentos-dialog.component';

describe('DepartamentosDialogComponent', () => {
  let component: DepartamentosDialogComponent;
  let fixture: ComponentFixture<DepartamentosDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentosDialogComponent]
    });
    fixture = TestBed.createComponent(DepartamentosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
