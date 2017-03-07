import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAnswerDialogComponent } from './show-answer-dialog.component';

describe('ShowAnswerDialogComponent', () => {
  let component: ShowAnswerDialogComponent;
  let fixture: ComponentFixture<ShowAnswerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAnswerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAnswerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
