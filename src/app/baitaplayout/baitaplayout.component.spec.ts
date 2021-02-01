import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitaplayoutComponent } from './baitaplayout.component';

describe('BaitaplayoutComponent', () => {
  let component: BaitaplayoutComponent;
  let fixture: ComponentFixture<BaitaplayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaitaplayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitaplayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
