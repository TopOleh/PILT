import { FoodCard } from 'src/app/core/interfaces/food-card';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pilt-calories-card',
  templateUrl: './calories-card.component.html',
  styleUrls: ['./calories-card.component.scss']
})

export class CaloriesCardComponent implements OnInit {
  @Input() food: FoodCard;

  public allFood: FoodCard[];

  constructor() { }

  ngOnInit() {
  }

}
