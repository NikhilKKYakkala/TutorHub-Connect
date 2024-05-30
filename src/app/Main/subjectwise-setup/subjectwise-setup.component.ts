import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubjectwisesetupService } from '../subjectwisesetup.service';

@Component({
  selector: 'app-subjectwise-setup',
  templateUrl: './subjectwise-setup.component.html',
  styleUrls: ['./subjectwise-setup.component.css']
})
export class SubjectwiseSetupComponent implements OnInit {
  Subjectwiseform:FormGroup;

  constructor(private subjectwiseservice:SubjectwisesetupService) { }


  ngOnInit(): void {

    this.Subjectwiseform=new FormGroup({
      Tuitionname: new FormControl(null, { validators: [Validators.required] }),
      location: new FormControl(null, { validators: [Validators.required] }),
      subject: new FormControl(null, { validators: [Validators.required] }),
      fee: new FormControl(null, { validators: [Validators.required] }),
      uniquecode: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  SubjectwiseSetup()
  {
    this.subjectwiseservice.addSubject
    (
      this.Subjectwiseform.value.Tuitionname,
      this.Subjectwiseform.value.location,
      this.Subjectwiseform.value.subject,
      this.Subjectwiseform.value.fee,
      this.Subjectwiseform.value.uniquecode,
    );
    this.Subjectwiseform.reset();
  }

}
