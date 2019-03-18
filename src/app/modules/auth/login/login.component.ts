import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pilt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
