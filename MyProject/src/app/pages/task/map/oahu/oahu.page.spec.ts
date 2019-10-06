import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OahuPage } from './oahu.page';

describe('OahuPage', () => {
  let component: OahuPage;
  let fixture: ComponentFixture<OahuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OahuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OahuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
