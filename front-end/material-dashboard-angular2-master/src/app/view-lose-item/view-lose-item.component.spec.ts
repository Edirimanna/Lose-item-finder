import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoseItemComponent } from './view-lose-item.component';

describe('ViewLoseItemComponent', () => {
  let component: ViewLoseItemComponent;
  let fixture: ComponentFixture<ViewLoseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLoseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
