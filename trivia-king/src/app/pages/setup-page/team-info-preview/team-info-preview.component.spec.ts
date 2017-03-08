import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfoPreviewComponent } from './team-info-preview.component';

describe('TeamInfoPreviewComponent', () => {
  let component: TeamInfoPreviewComponent;
  let fixture: ComponentFixture<TeamInfoPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamInfoPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInfoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
