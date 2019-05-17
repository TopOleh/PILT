import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/interfaces/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pilt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private minPasswordLength: number = 6;
  public submitted: boolean = false;
  public loginForm: FormGroup;
  public hide: boolean = true;
  public returnUrl: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _fbs: FirebaseService,
    private _router: Router,
    private _route: ActivatedRoute
    ) {
      // redirect to home if already logged in
      if (this._fbs.currentUserValue) {
        this._router.navigate(['/user']);
      }
    }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['dgtop@email', [Validators.email, Validators.required]],
      password: ['123456', [Validators.required, Validators.minLength(this.minPasswordLength)]]
    });

    // get return url from the route parameters or default '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/user';
  }

  public get fc() {
    return this.loginForm.controls;
  }

  public submitLogin(user: User): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this._fbs.getUser(user)
    .subscribe(
      users => {
        if (users) {
          this._router.navigate([this.returnUrl]);
        } else {
          console.error('Wrong email or password');
        }
      },

      err => console.error('Login error :', err)
    );
  }

}
