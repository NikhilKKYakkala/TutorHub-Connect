import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  signupForm: FormGroup;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      phoneno: new FormControl(null,{ validators: [Validators.required,Validators.maxLength(10),Validators.minLength(10)] }),
      type:new FormControl(null),
    });
  }

  onSubmit(){
    if (this.signupForm.invalid) {
      return;
    }
    this.isLoading = true;
    console.log(this.signupForm.value.type);
    if((this.signupForm.value.type)=="Student")
    {
    this.authService.createUser(
       this.signupForm.value.firstname,
       this.signupForm.value.lastname,
       this.signupForm.value.email,
       this.signupForm.value.password,
       this.signupForm.value.phoneno,
       this.signupForm.value.type
      );
    }
    else
    {
      this.authService.createUser1(
        this.signupForm.value.firstname,
        this.signupForm.value.lastname,
        this.signupForm.value.email,
        this.signupForm.value.password,
        this.signupForm.value.phoneno,
        this.signupForm.value.type
       );
    }
  }

}
