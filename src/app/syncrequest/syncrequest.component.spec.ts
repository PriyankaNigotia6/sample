import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncrequestComponent } from './syncrequest.component';

describe('SyncrequestComponent', () => {
  let component: SyncrequestComponent;
  let fixture: ComponentFixture<SyncrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
