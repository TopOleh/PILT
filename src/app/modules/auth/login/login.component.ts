import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'pilt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  private minPasswordLength: number = 6;
  public hide: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
    private _fbs: FirebaseService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['dgtop1@email.com', [Validators.email, Validators.required]],
      password: ['123456', [Validators.required, Validators.minLength(this.minPasswordLength)]]
    });
  }

  public submitLogin(user: User): void {
    this._fbs.getUser(user)
    .subscribe(
      users => {
        if (users) {
          this._router.navigateByUrl('user');
        } else {
          console.error('User does not exist');
        }
      },
      err => console.error('Login error :', err)
    );
  }

}
