import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/auth';

@Component({
  selector: 'pilt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.checkUserStatus();
  }

  public onActivate($event): void {
    console.log('Activated component :', $event);
  }

  public onDeactivate($event): void {
    console.log('Activated component :', $event);
  }
}
