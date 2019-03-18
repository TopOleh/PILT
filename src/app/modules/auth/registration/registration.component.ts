import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pilt-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public email = new FormControl('', [Validators.required, Validators.email]);
  public hide: boolean = true;

  constructor() { }

  public getErrorMessage(): string {
    return this.email.hasError('required') ? 'Please enter email' :
      this.email.hasError('email') ? 'Not valid email' :
        '';
  }

  ngOnInit() {
  }

}
