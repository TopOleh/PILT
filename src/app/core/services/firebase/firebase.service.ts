import { User } from 'src/app/core/interfaces/user';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { NewUser } from 'src/app/core/interfaces/new-user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  private _currentUserSubject: BehaviorSubject<NewUser>;
  public currentUser: Observable<NewUser>;

  constructor(
    private _afs: AngularFirestore
  ) {
    this._currentUserSubject = new BehaviorSubject<NewUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this._currentUserSubject.asObservable();
  }

  public get currentUserValue(): NewUser {
    return this._currentUserSubject.value;
  }

  public register(user: NewUser): Promise<void> {
    return this._afs.collection<NewUser>('users')
      .doc(user.email)
      .set(user)
      .then(_ => console.log('Added user :', user))
      .catch(err => console.log('Registration error :', err));
  }

  public getUser(user: User | NewUser): Observable<NewUser> {
    return this._afs.collection<NewUser>('users', ref => ref.where('email', '==', user.email))
    .valueChanges()
    .pipe(
      map((_users: NewUser[]) => {
          return _users.shift();
      })
    )
    .pipe(
      map( (_user: NewUser) => {
        if (_user) {
          localStorage.setItem('currentUser', JSON.stringify(_user));
          this._currentUserSubject.next(_user);
        }

        return _user;
      })
    );
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this._currentUserSubject.next(null);
  }
}
