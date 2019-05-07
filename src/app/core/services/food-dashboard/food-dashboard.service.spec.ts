import { TestBed } from '@angular/core/testing';

import { FoodDashboardService } from './food-dashboard.service';

describe('FoodDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodDashboardService = TestBed.get(FoodDashboardService);
    expect(service).toBeTruthy();
  });
});
