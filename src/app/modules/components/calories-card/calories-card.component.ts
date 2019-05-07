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

  constructor() { }

  ngOnInit() {
  }

  public addFood() {
    this.sendFood.emit(this.food);
  }
}
