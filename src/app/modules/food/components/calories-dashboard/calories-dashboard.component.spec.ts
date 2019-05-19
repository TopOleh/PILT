import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesDashboardComponent } from './calories-dashboard.component';

describe('CaloriesDashboardComponent', () => {
  let component: CaloriesDashboardComponent;
  let fixture: ComponentFixture<CaloriesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
