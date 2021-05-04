import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      user_id: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void{}

  get userid(): any {
    return this.loginForm.get('user_id');
  }

  get pwd(): any {
    return this.loginForm.get('pwd');
  }

  onSubmit(): void {
    // this.loginService.login(this.loginForm.value);
  }

}
