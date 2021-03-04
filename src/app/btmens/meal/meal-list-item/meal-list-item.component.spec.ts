import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealListItemComponent } from './meal-list-item.component';

describe('MealListItemComponent', () => {
  let component: MealListItemComponent;
  let fixture: ComponentFixture<MealListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
