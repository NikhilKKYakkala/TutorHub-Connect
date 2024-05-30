import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form:FormGroup;


    constructor(public profileservice:ProfileService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      student_name : new FormControl(null, { validators: [Validators.required] }),
      parent_name : new FormControl(null, { validators: [Validators.required] }),
      gender : new FormControl('male', { validators: [Validators.required] }),
      email : new FormControl(null, { validators: [Validators.required] }),
      education_status : new FormControl(null, { validators: [Validators.required] }),
      age : new FormControl(null, { validators: [Validators.required] }),
      education_stream : new FormControl(null, { validators: [Validators.required] }),
      course_name : new FormControl(null, { validators: [Validators.required] }),
      name_institute : new FormControl(null, { validators: [Validators.required] }),
      phone_number : new FormControl(null,{ validators: [Validators.required] }),
      address : new FormControl(null, { validators: [Validators.required] }),
    });
  }

  onSaveProfile() {
      this.profileservice.addProfile
      (
        this.form.value.student_name,
        this.form.value.parent_name,
        this.form.value.gender,
        this.form.value.email,
        this.form.value.education_status,
        this.form.value.age,
        this.form.value.education_stream,
        this.form.value.course_name,
        this.form.value.name_institute,
        this.form.value.phone_number,
        this.form.value.address
      );
      this.form.reset();
    }
  }

