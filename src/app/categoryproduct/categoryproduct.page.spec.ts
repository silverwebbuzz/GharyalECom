import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryproductPage } from './categoryproduct.page';

describe('CategoryproductPage', () => {
  let component: CategoryproductPage;
  let fixture: ComponentFixture<CategoryproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryproductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
