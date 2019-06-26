import { AuthService } from 'src/app/modules/auth/services';
import { Component, OnInit, HostListener } from '@angular/core';
import { tap } from 'rxjs/operators';

interface MenuItem  {
  path: string;
  title: string;
  icon: string;
  childLinks?: {
    path: string;
    title: string;
    signedIn?: boolean;
  }[];
  signedIn?: boolean;
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
      { path: 'food/new-card', title: 'Створити нову картку', signedIn: true},
      { path: '/food/all-food', title: 'Вся їжа'},
      { path: '/food/food-table', title: 'Твоє меню'}
    ]}
  ];

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.checkUserStatus();
  }

  public signOut(): void {
    this.auth.signOutUser();
  }

}
