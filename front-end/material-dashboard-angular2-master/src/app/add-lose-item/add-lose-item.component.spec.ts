import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoseItemComponent } from './add-lose-item.component';

describe('AddLoseItemComponent', () => {
  let component: AddLoseItemComponent;
  let fixture: ComponentFixture<AddLoseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLoseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
