import { AlertMessage } from 'src/app/core/interfaces/alert-message';
import { Router, NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private _subject = new Subject<AlertMessage>();
  private _keepAfterNavigationChange: boolean = false;

  constructor(private _router: Router) {
    // clear alert message on route change
    _router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this._keepAfterNavigationChange) {
          // only keep for a single location change
          this._keepAfterNavigationChange = false;
        } else {
          // clear alert
          this._subject.next();
        }
      }
    });
  }

  public success(message: string, _keepAfterNavigationChange: boolean = false): void {
    this._keepAfterNavigationChange = _keepAfterNavigationChange;
    this._subject.next({ type: 'success', text: message });
  }

  public error(message: string, _keepAfterNavigationChange: boolean = false) {
      this._keepAfterNavigationChange = _keepAfterNavigationChange;
      this._subject.next({ type: 'error', text: message });
  }

  public getMessage(): Observable<AlertMessage> {
    return this._subject.asObservable();
  }
}
