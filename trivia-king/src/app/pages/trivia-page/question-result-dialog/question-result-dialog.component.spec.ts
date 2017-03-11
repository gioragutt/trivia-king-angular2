import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionResultDialogComponent } from './question-result-dialog.component';

describe('QuestionResultDialogComponent', () => {
  let component: QuestionResultDialogComponent;
  let fixture: ComponentFixture<QuestionResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionResultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
