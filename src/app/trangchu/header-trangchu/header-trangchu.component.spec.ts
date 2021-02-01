import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTrangchuComponent } from './header-trangchu.component';

describe('HeaderTrangchuComponent', () => {
  let component: HeaderTrangchuComponent;
  let fixture: ComponentFixture<HeaderTrangchuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTrangchuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTrangchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
