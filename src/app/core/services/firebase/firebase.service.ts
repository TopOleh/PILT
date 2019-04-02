import { User } from 'src/app/core/interfaces/user';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NewUser } from 'src/app/core/interfaces/new-user';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(
    private _afs: AngularFirestore
  ) {}

  public register(user: NewUser): Promise<void> {
    return this._afs.collection<NewUser>('users')
      .doc(user.email)
      .set(user)
      .then(_ => console.log('Added user :', user))
      .catch(err => console.log('Registration error :', err));
  }

  public getUser(user: User | NewUser): Observable<NewUser[]> {
    return this._afs.collection<NewUser>('users', ref => ref.where('email', '==', user.email)).valueChanges();
  }
}
