import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfoInputComponent } from './team-info-input.component';

describe('TeamInfoInputComponent', () => {
  let component: TeamInfoInputComponent;
  let fixture: ComponentFixture<TeamInfoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamInfoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInfoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
