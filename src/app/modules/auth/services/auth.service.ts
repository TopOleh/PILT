import { User } from 'src/app/core/interfaces/user';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private db: AngularFirestore
  ) {
    this._currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this._currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this._currentUserSubject.value;
  }

  public register(user: User): Promise<void> {
    return this.db.collection<User>('users')
      .doc(user.email)
      .set(user)
      .then(_ => console.log('Added user :', user))
      .catch(err => console.log('Registration error :', err));
  }

  public getUser(user: User | User): Observable<User> {
    return this.db.collection<User>('users', ref => ref.where('email', '==', user.email))
    .valueChanges()
    .pipe(
      map((_users: User[]) => {
        return _users.filter((_user: User) => _user.password === user.password);
      })
    )
    .pipe(
      map((_users: User[]) => {
        return _users.shift();
      })
    )
    .pipe(
      map( (_user: User) => {
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
