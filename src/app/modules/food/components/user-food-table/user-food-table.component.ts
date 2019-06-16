import { Component, OnInit, ViewChild, NgZone, OnDestroy } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { FoodCard } from 'src/app/core/interfaces/food-card';

import { BreakpointsService } from 'src/app/core/services';
import { FoodService } from '../../services';

// RXJS
import { Subscription } from 'rxjs';

@Component({
  selector: 'pilt-user-food-table',
  templateUrl: './user-food-table.component.html',
  styleUrls: ['./user-food-table.component.scss']
})
export class UserFoodTableComponent implements OnInit, OnDestroy {
  public userFood: FoodCard[];
  public displayedColumns: string[] = ['title', 'grams', 'calories', 'remove'];
  public dataSource: MatTableDataSource<FoodCard>;
  public mobile: boolean = false;

  private subscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;

  constructor( private zone: NgZone, private foodService: FoodService, private breakpointsService: BreakpointsService) { }

  ngOnInit() {
    this.subscription = this.foodService.getMyFood().subscribe(food => this.userFood = food);
    this.dataSource = new MatTableDataSource(this.userFood);
    this.dataSource.sort = this.sort;

    this.mobile = this.breakpointsService.checkMobileView();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /** Gets the total cost of all transactions. */
  getTotalCalories() {
    return this.userFood.map(t => t.calories).reduce((acc, value) => acc + value, 0);
  }

  removeItem($event, i) {
    this.userFood.splice(i, 1);
    this.zone.run(() => this.dataSource = new MatTableDataSource(this.userFood));
  }
}
