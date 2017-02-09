/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BrightContrastComponent } from './bright-contrast.component';

describe('BrightContrastComponent', () => {
  let component: BrightContrastComponent;
  let fixture: ComponentFixture<BrightContrastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrightContrastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrightContrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
