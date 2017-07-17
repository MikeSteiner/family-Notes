/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyNextComponent } from './my-next.component';

describe('MyNextComponent', () => {
  let component: MyNextComponent;
  let fixture: ComponentFixture<MyNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
