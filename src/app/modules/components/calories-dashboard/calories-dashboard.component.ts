import { FoodCard } from 'src/app/core/interfaces/food-card';
import { FoodService } from 'src/app/core/services/food/food-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pilt-calories-dashboard',
  templateUrl: './calories-dashboard.component.html',
  styleUrls: ['./calories-dashboard.component.scss']
})
export class CaloriesDashboardComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public allFood: FoodCard[] = [];
  private userFood: FoodCard[] = JSON.parse(localStorage.getItem('User food')) || [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.subscription = this.foodService.getAllDishes()
      .subscribe(res => this.allFood = res);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  reciveFood(food: FoodCard) {
    this.userFood.push(food);
    console.log('array :', this.userFood);
    localStorage.setItem('User food', JSON.stringify(this.userFood));
  }
}
