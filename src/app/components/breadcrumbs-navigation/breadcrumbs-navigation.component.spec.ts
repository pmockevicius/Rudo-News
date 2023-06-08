import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsNavigationComponent } from './breadcrumbs-navigation.component';

describe('BreadcrumbsNavigationComponent', () => {
  let component: BreadcrumbsNavigationComponent;
  let fixture: ComponentFixture<BreadcrumbsNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbsNavigationComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
