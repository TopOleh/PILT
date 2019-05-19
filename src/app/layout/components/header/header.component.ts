import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pilt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuList: { path: string, title: string, icon: string }[] = [
    { path: '/home', title: 'Домашня сторінка', icon: 'home'},
    { path: '/food/new-card', title: 'Створити нову картку', icon: 'playlist_add'},
    { path: '/food/food-search', title: 'Уся їжа', icon: 'fastfood'},
    { path: '/food/food-table', title: 'Твоє меню', icon: 'list'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
