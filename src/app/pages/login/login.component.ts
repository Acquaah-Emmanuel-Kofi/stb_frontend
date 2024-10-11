import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { KEY } from '../../helpers/constant.helper';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  private formBuilder = inject(FormBuilder);
  private _router = inject(Router);

  constructor() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  handleSubmit() {
    console.log('Submitted');
    const {username, password} = this.loginForm.value

    if (this.formIsValid()) {
      localStorage.setItem(KEY, username);
      console.log(this.loginForm.value.username);
      this._router.navigate(['dashboard']);
    }
  }

  formIsValid() {
    return this.loginForm.valid;
  }
}
