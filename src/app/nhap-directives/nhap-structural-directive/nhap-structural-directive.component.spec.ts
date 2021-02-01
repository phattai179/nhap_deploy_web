import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapStructuralDirectiveComponent } from './nhap-structural-directive.component';

describe('NhapStructuralDirectiveComponent', () => {
  let component: NhapStructuralDirectiveComponent;
  let fixture: ComponentFixture<NhapStructuralDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhapStructuralDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhapStructuralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
