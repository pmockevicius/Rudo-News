import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasPageComponent } from './noticias-page.component';

describe('NoticiasPageComponent', () => {
  let component: NoticiasPageComponent;
  let fixture: ComponentFixture<NoticiasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiasPageComponent]
    });
    fixture = TestBed.createComponent(NoticiasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
