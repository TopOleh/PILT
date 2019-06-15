import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { FoodCard } from 'src/app/core/interfaces/food-card';
import { FoodService } from 'src/app/modules/food/services/food-service.service';

// rxjs
import { Subscription } from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';

@Component({
  selector: 'pilt-all-food',
  templateUrl: './all-food.component.html',
  styleUrls: ['./all-food.component.scss']
})
export class AllFoodComponent implements OnInit, OnDestroy {
  public allFood: FoodCard[];
  public searchText: string;
  public query: string;
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['title', 'description', 'grams', 'calories', 'add'];
  public mobile: boolean = false;

  private userFood: FoodCard[];
  private subscription: Subscription;
  private durationSnackBar: number = 2;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(public foodService: FoodService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.subscription = this.foodService.getAllDishes()
    .subscribe(foodAmount => this.dataSource.data = foodAmount);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.pagination;

    this.mobile = window.innerWidth < 640 ? true : false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public addFood(food: FoodCard): void {
    this.userFood = JSON.parse(localStorage.getItem('User food')) || [];
    this.userFood.push(food);
    localStorage.setItem('User food', JSON.stringify(this.userFood));
    this.openSnackBar();
  }

  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private openSnackBar(): void {
    this.snackBar.open('Страву додано!', 'Х' , {
      duration: this.durationSnackBar * 1000
    });
  }
}