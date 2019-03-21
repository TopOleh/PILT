import { AngularFireAuthModule } from '@angular/fire/auth';
import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private _afs: AngularFirestore,
    private _afAuth: AngularFireAuthModule,
    private _router: Router,
    private _ngZone: NgZone
  ) {}

  public getFirebase() {
  }
}
