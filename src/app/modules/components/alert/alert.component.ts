import { AlertMessage } from 'src/app/core/interfaces/alert-message';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'pilt-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscribtion: Subscription;
  public message: AlertMessage;

  constructor(private _alertService: AlertService) { }

  ngOnInit() {
    this.subscribtion = this._alertService.getMessage().subscribe (message => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
