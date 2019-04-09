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

  constructor(
    private _formBuilder: FormBuilder,
    private _fbs: FirebaseService,
  ) { }

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      age: ['22', Validators.required],
      name: ['Olko', Validators.required],
      gender: ['', Validators.required],
      email: ['dgtop1@email.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(this.minLengthPassword)]]
    });
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
          this._fbs.register(user);
          localStorage.setItem('ACCESS_TOKEN', 'access_token');
        } else {
          console.error('User already exist');
        }
      },
      err => console.error('Register error :', err)
    );
  }

}
