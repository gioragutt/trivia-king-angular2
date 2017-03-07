import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaPanelComponent } from './trivia-panel.component';

describe('TriviaPanelComponent', () => {
  let component: TriviaPanelComponent;
  let fixture: ComponentFixture<TriviaPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
