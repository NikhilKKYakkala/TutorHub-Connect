import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';


import { AuthService } from '../auth.service'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  loginForm: FormGroup;


  constructor(public authService: AuthService) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    });
  }

  onLogin(){
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

}
