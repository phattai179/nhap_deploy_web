import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLastestComponent } from './content-lastest.component';

describe('ContentLastestComponent', () => {
  let component: ContentLastestComponent;
  let fixture: ComponentFixture<ContentLastestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLastestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLastestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
