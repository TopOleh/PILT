import { FoodCard } from 'src/app/core/interfaces/food-card';
import { FoodService } from 'src/app/modules/food/services/food-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'pilt-calories-dashboard',
  templateUrl: './calories-dashboard.component.html',
  styleUrls: ['./calories-dashboard.component.scss']
})
export class CaloriesDashboardComponent implements OnInit {
  private userFood: FoodCard[];
  public allFood: Observable<FoodCard[]>;
  public searchText: string;

  constructor(private foodService: FoodService) { }
  public query: string;

  ngOnInit() {
    this.allFood = this.foodService.getAllDishes();
  }

  public receiveFood(food: FoodCard): void {
    this.userFood = JSON.parse(localStorage.getItem('User food')) || [];
    this.userFood.push(food);
    localStorage.setItem('User food', JSON.stringify(this.userFood));
  }
}
