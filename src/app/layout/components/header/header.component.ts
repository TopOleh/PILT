import { AuthService } from 'src/app/modules/auth/services';
import { Component, OnInit, HostListener } from '@angular/core';

interface MenuItem  {
  path: string;
  title: string;
  icon: string;
  childLinks?: {
    path: string;
    title: string;
  }[];
}

@Component({
  selector: 'pilt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuList: MenuItem[] = [
    { path: '/home', title: '', icon: 'home'},
    { path: '/food', title: 'Їжа', icon: 'fastfood', childLinks: [
      { path: 'food/new-card', title: 'Створити нову картку'},
      { path: '/food/all-food', title: 'Вся їжа'},
      { path: '/food/food-table', title: 'Твоє меню'}
    ]}
  ];

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  public signOut(): void {
    this.auth.signOutUser();
  }

}
