import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';
import { NewUser } from 'src/app/core/interfaces/new-user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'pilt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user: User;
  public loginForm: FormGroup;
  private minPasswordLength: number = 6;
  public hide: boolean = true;

  constructor(
    private _fbs: FirebaseService,
    private _formBuilder: FormBuilder,
    private _router: Router
    ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['dgtop1@email.com', [Validators.email, Validators.required]],
      password: ['123456', [Validators.required, Validators.minLength(this.minPasswordLength)]]
    });

    this._fbs.getUsers()
      .subscribe((res: NewUser[]) => {
        console.log('res :', res);
      });
  }

  public submitLogin(): void {
    this.user = this.loginForm.value;

    this._fbs.login(this.user)
      .subscribe((exist: boolean) => {
        if (exist) {
          console.log('User exist', exist);
          localStorage.setItem('THIS_USER_TOKEN', this.user.email);
          this._router.navigateByUrl('user');
        } else {
          console.error('User doesn`t exist!');
        }
      },
      err => console.error('Error login ', err));
  }

}
