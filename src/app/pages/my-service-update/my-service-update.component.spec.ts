import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyServiceUpdateComponent } from './my-service-update.component';

describe('MyServiceUpdateComponent', () => {
  let component: MyServiceUpdateComponent;
  let fixture: ComponentFixture<MyServiceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyServiceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyServiceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
