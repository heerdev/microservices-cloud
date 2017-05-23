/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BatchviewComponent } from './batchview.component';

describe('BatchviewComponent', () => {
  let component: BatchviewComponent;
  let fixture: ComponentFixture<BatchviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
