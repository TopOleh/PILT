import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesCardComponent } from './calories-card.component';

describe('CaloriesCardComponent', () => {
  let component: CaloriesCardComponent;
  let fixture: ComponentFixture<CaloriesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
