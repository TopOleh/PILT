import { FoodCard } from './../../../core/interfaces/food-card';
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
    return calories / this.caloriesPerGram ;
  }

  public calcCalories(grams: number): number {
    return this.caloriesPerGram * grams;
  }

  public addFood(food: FoodCard): void {
    this.sendFood.emit(food);
  }
}
