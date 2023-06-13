import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQTermsPoliticasComponent } from './faq-terms-politicas.component';

describe('FAQTermsPoliticasComponent', () => {
  let component: FAQTermsPoliticasComponent;
  let fixture: ComponentFixture<FAQTermsPoliticasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FAQTermsPoliticasComponent]
    });
    fixture = TestBed.createComponent(FAQTermsPoliticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
