import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { FoodCard } from 'src/app/core/interfaces/food-card';
import { FoodService } from 'src/app/modules/food/services/food-service.service';

// rxjs
import { Subscription } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'pilt-calories-dashboard',
  templateUrl: './calories-dashboard.component.html',
  styleUrls: ['./calories-dashboard.component.scss']
})
export class CaloriesDashboardComponent implements OnInit, OnDestroy {
  public allFood: FoodCard[];
  public searchText: string;
  public query: string;
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['title', 'description', 'grams', 'calories', 'add'];

  private userFood: FoodCard[];
  private subscription: Subscription;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(public foodService: FoodService) { }

  ngOnInit() {
    this.subscription = this.foodService.getAllDishes()
    .subscribe(foodAmount => this.dataSource.data = foodAmount);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.pagination;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public receiveFood(food: FoodCard): void {
    this.userFood = JSON.parse(localStorage.getItem('User food')) || [];
    this.userFood.push(food);
    localStorage.setItem('User food', JSON.stringify(this.userFood));
  }

  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
