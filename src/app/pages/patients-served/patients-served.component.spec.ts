import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsServedComponent } from './patients-served.component';

describe('PatientsServedComponent', () => {
  let component: PatientsServedComponent;
  let fixture: ComponentFixture<PatientsServedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsServedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsServedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
