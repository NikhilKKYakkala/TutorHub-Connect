import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { profileInterface } from './Profile.model';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient,private router:Router) { }
  private Profilearray:profileInterface[]=[];
  private profileUpdated = new Subject<profileInterface[]>();

  addProfile(student_name:string,parent_name:string,gender:string,email:string,education_status:string,age:string,education_stream:string,course_name:string,name_institute:string,phone_number:string,address:string)
  {
    let data = {
      "student_name": student_name,
      "parent_name": parent_name,
      "gender": gender,
      "email": email,
      "education_status": education_status,
      "age": age,
      "education_stream": education_stream,
      "course_name": course_name,
      "name_institute": name_institute,
      "phone_number": phone_number,
      "address": address
    };
    /*
    const ProfileData= new FormData();
    ProfileData.append("student_name",student_name);
    ProfileData.append("parent_name",parent_name);
    ProfileData.append("gender",gender);
    ProfileData.append("email",email);
    ProfileData.append("education_status",education_status);
    ProfileData.append("age",age);
    ProfileData.append("education_stream",education_stream);
    ProfileData.append("course_name",course_name);
    ProfileData.append("name_institute",name_institute);
    ProfileData.append("phone_number",phone_number);
    ProfileData.append("address",address);
    */
    this.http.post<{ message: string; Profile: profileInterface }>("http://localhost:3000/api/profile", data)
    .subscribe(responseData => {
      const profile: profileInterface = {
        id: responseData.Profile.id,
        student_name:student_name,
        parent_name:parent_name,
        gender:gender,
        email:email,
        education_status:education_status,
        age:age,
        education_stream:education_stream,
        course_name:course_name,
        name_institute:name_institute,
        phone_number:phone_number,
        address:address,
      };
      console.log(responseData.Profile.id);
      this.Profilearray.push(profile);
      this.profileUpdated.next([...this.Profilearray]);
      this.router.navigate(["/Login"]);
    });
  }
}
