import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowfuntestComponent } from './arrowfuntest.component';

describe('ArrowfuntestComponent', () => {
  let component: ArrowfuntestComponent;
  let fixture: ComponentFixture<ArrowfuntestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowfuntestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowfuntestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
