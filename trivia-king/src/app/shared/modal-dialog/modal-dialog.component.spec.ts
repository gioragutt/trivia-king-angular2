import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrkModalDialogComponent } from './modal-dialog.component';

describe('ModalDialogComponent', () => {
  let component: TrkModalDialogComponent;
  let fixture: ComponentFixture<TrkModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrkModalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrkModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
