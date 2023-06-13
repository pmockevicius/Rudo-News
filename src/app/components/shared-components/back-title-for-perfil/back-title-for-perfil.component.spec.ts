import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTitleForPerfilComponent } from './back-title-for-perfil.component';

describe('BackTitleForPerfilComponent', () => {
  let component: BackTitleForPerfilComponent;
  let fixture: ComponentFixture<BackTitleForPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackTitleForPerfilComponent]
    });
    fixture = TestBed.createComponent(BackTitleForPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
