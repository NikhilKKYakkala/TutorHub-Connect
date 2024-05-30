import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { mimeType } from './mime-type.validator';
import { InstituteService } from '../institute.service';

@Component({
  selector: 'app-tuition-creation',
  templateUrl: './tuition-creation.component.html',
  styleUrls: ['./tuition-creation.component.css']
})
export class TuitionCreationComponent implements OnInit {

  form: FormGroup;
  imagePreview: string;
  mode: string;
  isLoading=false;

  constructor(private instituteService: InstituteService) { }


  ngOnInit(): void {
    this.isLoading=true;
    this.form = new FormGroup({
      title: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      content: new FormControl(null, { validators: [Validators.required] }),
      sub_content: new FormControl(null, { validators: [Validators.required] }),
      no_of_faculty: new FormControl(null, { validators: [Validators.required] }),
      year_of_establishment:new FormControl(null, { validators: [Validators.required] }),
      phonenumber: new FormControl(null, { validators: [Validators.required,Validators.maxLength(10),Validators.minLength(10)] }),
      email: new FormControl(null, { validators: [Validators.required] }),
      website: new FormControl(null, { validators: [Validators.required] }),
      address: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {validators: [Validators.required],asyncValidators: [mimeType]})
    });
    this.mode='create';
  }


  onImagepicked(event:Event){
    const file =(event.target as HTMLInputElement).files[0];
    this.form.patchValue({image:file});
    this.form.get('image').updateValueAndValidity();
    const reader= new FileReader();
    reader.onload=()=>{
      this.imagePreview=reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    else
    {
      // console.log(this.form);
      this.instituteService.addTuition
      (
        this.form.value.title,
        this.form.value.content,
        this.form.value.sub_content,
        this.form.value.no_of_faculty,
        this.form.value.year_of_establishment,
        this.form.value.phonenumber,
        this.form.value.email,
        this.form.value.website,
        this.form.value.address,
        this.form.value.image
      );


    }
    this.form.reset();
  }
}
