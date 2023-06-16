import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscribeCommentInputComponent } from './escribe-comment-input.component';

describe('EscribeCommentInputComponent', () => {
  let component: EscribeCommentInputComponent;
  let fixture: ComponentFixture<EscribeCommentInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscribeCommentInputComponent]
    });
    fixture = TestBed.createComponent(EscribeCommentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
