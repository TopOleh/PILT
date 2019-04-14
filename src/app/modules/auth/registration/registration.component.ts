import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';
import { NewUser } from 'src/app/core/interfaces/new-user';

@Component({
  selector: 'pilt-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  private minLengthPassword: number = 6;

  public registerForm: FormGroup;
  public isSubmited: boolean = false;
  public hide: boolean = true;
  public genders: string[] = ['Male', 'Female', 'Incognito'];
  public returnUrl: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _fbs: FirebaseService,
  ) { }

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      age: ['18', Validators.required],
      name: ['Name', Validators.required],
      gender: ['', Validators.required],
      email: ['your@email.com', [Validators.required, Validators.email]],
      password: ['888888', [Validators.required, Validators.minLength(this.minLengthPassword)]]
    });

    // get return url from the route parameters or default '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/user';
  }

  public get fc() {
    return this.registerForm.controls;
  }

  public submitRegistration(user: NewUser): void {
    this.isSubmited = true;

    if (this.registerForm.invalid) {
      return;
    }

    this._fbs.getUser(user)
    .subscribe(
      users => {
        if (users) {
          console.error('User already exist');
        } else {
          this._fbs.register(user);
          this._router.navigate([this.returnUrl]);
        }
      },

      err => console.error('Register error :', err)
    );
  }

}
