import { FoodCard } from 'src/app/core/interfaces/food-card';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pilt-calories-card',
  templateUrl: './calories-card.component.html',
  styleUrls: ['./calories-card.component.scss']
})

export class CaloriesCardComponent implements OnInit {
  @Input() food: FoodCard;
  @Output() sendFood = new EventEmitter<FoodCard>();
  public caloriesPerGram: number;

  constructor() { }

  ngOnInit() {
    this.caloriesPerGram = this.food.calories / 100;
  }

  public calcGrams(calories: number): number {
    return parseFloat((calories / this.caloriesPerGram ).toFixed(2));
  }

  public calcCalories(grams: number): number {
    return parseFloat((this.caloriesPerGram * grams).toFixed(2));
  }

  public addFood(food: FoodCard): void {
    this.sendFood.emit(food);
  }
}
