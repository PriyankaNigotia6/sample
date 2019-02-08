import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicescheckComponent } from './servicescheck.component';

describe('ServicescheckComponent', () => {
  let component: ServicescheckComponent;
  let fixture: ComponentFixture<ServicescheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicescheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicescheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
