import { MatSnackBar } from '@angular/material';
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
  private durationSnackBar: number = 3;

  public submitted: boolean = false;
  public loginForm: FormGroup;
  public hide: boolean = true;
  public returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(this.minPasswordLength)]]
    });

    // get return url from the route parameters or default '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/food';
  }

  public get fc() {
    return this.loginForm.controls;
  }

  public signIn(user: User): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.signInUser(user)
      .then( res => this.router.navigateByUrl(this.returnUrl))
      .catch(error => {
        this.snackBar.open(error.message, 'Х' , {
          duration: this.durationSnackBar * 1000
        });
      })
      .finally(() => {
        this.fc.password.setValue('');
      });
  }

}
