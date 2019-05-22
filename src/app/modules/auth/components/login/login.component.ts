import { AuthService } from 'src/app/modules/auth/services';
import { Component, OnInit } from '@angular/core';
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
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) {
      // redirect to home if already logged in
      if (this.authService.currentUserValue) {
        this.router.navigate(['/food']);
      }
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['dgtop@email', [Validators.email, Validators.required]],
      password: ['123456', [Validators.required, Validators.minLength(this.minPasswordLength)]]
    });

    // get return url from the route parameters or default '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/food';
  }

  public get fc() {
    return this.loginForm.controls;
  }

  public submitLogin(user: User): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.getUser(user)
    .subscribe(
      users => {
        if (users) {
          this.router.navigate([this.returnUrl]);
        } else {
          console.error('Wrong email or password');
        }
      },

      err => console.error('Login error :', err)
    );
  }

}
