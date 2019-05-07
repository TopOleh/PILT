import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pilt-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public menuList: {path: string, title: string}[] = [
    { path: '/user', title: 'Користувач'},
    { path: '/user/new-card', title: 'Створити нову картку'},
    { path: '/user/food-search', title: 'Уся їжа'},
    { path: '/user/user-table', title: 'Твоє меню'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
