import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerButtonPage } from './datepicker-button.page';

describe('DatepickerButtonPage', () => {
  let component: DatepickerButtonPage;
  let fixture: ComponentFixture<DatepickerButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerButtonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
