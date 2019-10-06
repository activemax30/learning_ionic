import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurencyPage } from './curency.page';

describe('CurencyPage', () => {
  let component: CurencyPage;
  let fixture: ComponentFixture<CurencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurencyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
