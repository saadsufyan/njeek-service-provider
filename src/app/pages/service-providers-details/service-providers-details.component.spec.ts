import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProvidersDetailsComponent } from './service-providers-details.component';

describe('ServiceProvidersDetailsComponent', () => {
  let component: ServiceProvidersDetailsComponent;
  let fixture: ComponentFixture<ServiceProvidersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProvidersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProvidersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
