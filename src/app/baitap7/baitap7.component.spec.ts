import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap7Component } from './baitap7.component';

describe('Baitap7Component', () => {
  let component: Baitap7Component;
  let fixture: ComponentFixture<Baitap7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
