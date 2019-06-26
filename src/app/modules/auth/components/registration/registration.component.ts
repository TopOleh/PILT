import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/interfaces/new-user';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../services';

@Component({
  selector: 'pilt-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  private minLengthPassword: number = 6;

  public registerForm: FormGroup;
  public isSubmitted: boolean = false;
  public hide: boolean = true;
  public genders: string[] = ['Чоловік', 'Жінка'];
  public returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      // age: ['', Validators.required],
      // name: ['', Validators.required],
      // gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.minLengthPassword)]]
    });

    // get return url from the route parameters or default '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/food';
  }

  public get fc() {
    return this.registerForm.controls;
  }

  public submitRegistration(user: User): void {
    this.isSubmitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.authService.getUser(user)
    .subscribe(
      users => {
        if (users) {
          console.error('User already exist');
        } else {
          this.authService.register(user);
          this.router.navigate([this.returnUrl]);
        }
      },
      err => console.error('Register error :', err)
    );
  }
}
