import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFoodTableComponent } from './user-food-table.component';

describe('UserFoodTableComponent', () => {
  let component: UserFoodTableComponent;
  let fixture: ComponentFixture<UserFoodTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFoodTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFoodTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
