import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMaxComponent } from './item-max.component';

describe('ItemMaxComponent', () => {
  let component: ItemMaxComponent;
  let fixture: ComponentFixture<ItemMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
