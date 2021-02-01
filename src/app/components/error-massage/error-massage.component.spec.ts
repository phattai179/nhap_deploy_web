import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMassageComponent } from './error-massage.component';

describe('ErrorMassageComponent', () => {
  let component: ErrorMassageComponent;
  let fixture: ComponentFixture<ErrorMassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMassageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
