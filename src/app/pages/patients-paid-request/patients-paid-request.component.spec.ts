import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsPaidRequestComponent } from './patients-paid-request.component';

describe('PatientsPaidRequestComponent', () => {
  let component: PatientsPaidRequestComponent;
  let fixture: ComponentFixture<PatientsPaidRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsPaidRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsPaidRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
