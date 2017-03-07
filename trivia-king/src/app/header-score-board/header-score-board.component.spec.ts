import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderScoreBoardComponent } from './header-score-board.component';

describe('HeaderScoreBoardComponent', () => {
  let component: HeaderScoreBoardComponent;
  let fixture: ComponentFixture<HeaderScoreBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderScoreBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
