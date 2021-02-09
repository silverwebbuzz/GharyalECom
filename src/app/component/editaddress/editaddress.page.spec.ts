import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaddressPage } from './editaddress.page';

describe('EditaddressPage', () => {
  let component: EditaddressPage;
  let fixture: ComponentFixture<EditaddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaddressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
