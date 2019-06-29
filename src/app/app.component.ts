import { Component } from '@angular/core';

@Component({
  selector: 'pilt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public onActivate($event): void {
    console.log('Activated component :', $event);
  }

  public onDeactivate($event): void {
    console.log('Activated component :', $event);
  }
}
