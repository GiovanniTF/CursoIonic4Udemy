import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponentesPage } from './layout-componentes.page';

describe('LayoutComponentesPage', () => {
  let component: LayoutComponentesPage;
  let fixture: ComponentFixture<LayoutComponentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComponentesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
