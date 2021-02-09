import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorelocatorPage } from './storelocator.page';

describe('StorelocatorPage', () => {
  let component: StorelocatorPage;
  let fixture: ComponentFixture<StorelocatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorelocatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorelocatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
