import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private _fbs: FirebaseService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError( err => {
        console.log('Error interceptor');
        if (err.status === 401) {
          // autologout when it is 401
          this._fbs.logout();
          // reload(true)
          location.reload();
        }

        const error =  err.error.message || err.statusText;
        return throwError(error);
      }));
    }
}

