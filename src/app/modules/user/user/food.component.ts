import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pilt-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  public menuList: { path: string, title: string }[] = [
    { path: '/food', title: 'Користувач'},
    { path: '/food/new-card', title: 'Створити нову картку'},
    { path: '/food/food-search', title: 'Уся їжа'},
    { path: '/food/food-table', title: 'Твоє меню'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
