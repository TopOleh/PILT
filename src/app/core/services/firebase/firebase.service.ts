import { User } from 'src/app/core/interfaces/user';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NewUser } from 'src/app/core/interfaces/new-user';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private _afs: AngularFirestore
  ) {}

  public getUsers(): Observable<NewUser[]> {
    return  this._afs.collection<NewUser>('users')
                    .valueChanges();
  }

  public register(user: NewUser) {
    this._afs.collection('users')
      .doc(user.email)
      .set(user)
      .then(_ => console.log('Added user :', user))
      .catch(err => console.log('Happened error :', err));
  }

  public login(user: User) {
    return this._afs.collection<User>('users')
                  .doc(user.email)
                  .snapshotChanges()
                  .pipe(
                    map(data => {
                      console.log('data :', data);
                      return data.payload.exists;
                    })
                  );
    }
}
