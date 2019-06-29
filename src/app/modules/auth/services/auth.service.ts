import { User } from 'src/app/core/interfaces/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor( private auth: AngularFireAuth) {}

  public signInUser(user: User): Promise<any> {
    return this.auth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  public signUpUser(user: User): Promise<any> {
    return this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  public signOutUser() {
    this.auth.auth.signOut();
  }
}
