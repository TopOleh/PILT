import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { FoodCard } from 'src/app/core/interfaces/food-card';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'pilt-user-food-table',
  templateUrl: './user-food-table.component.html',
  styleUrls: ['./user-food-table.component.scss']
})
export class UserFoodTableComponent implements OnInit {
  public userFood: FoodCard[] = JSON.parse(localStorage.getItem('User food')) || [];
  public displayedColumns: string[] = ['title', 'grams', 'calories', 'remove'];
  public dataSource = new MatTableDataSource(this.userFood);

  @ViewChild(MatSort) sort: MatSort;

  constructor( private zone: NgZone) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  /** Gets the total cost of all transactions. */
  getTotalCalories() {
    return this.userFood.map(t => t.calories).reduce((acc, value) => acc + value, 0);
  }

  removeItem($event, i) {
    this.userFood.splice(i, 1);
    localStorage.setItem('User food', JSON.stringify(this.userFood));
    this.zone.run(() => this.dataSource = new MatTableDataSource(this.userFood));
  }
}
