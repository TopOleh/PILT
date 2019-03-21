import { NewUser } from 'src/app/core/interfaces/new-user';
import { User } from 'src/app/core/interfaces/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public userData: any;

  constructor() { }

  public registration() {}

  public register(userInfo: NewUser): void {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }

  public login(userInfo: User): void {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
