import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {Subjectwisesetup_Interface } from './subjectwise.model';
import { Subject } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SubjectwisesetupService {
  private subjectwisearray:Subjectwisesetup_Interface[]=[];
  private subjectwiseUpdated = new Subject<Subjectwisesetup_Interface[]>();

  constructor(private http:HttpClient,private router:Router) { }


  addSubject(Tuitionname:string,location:string,subject:string,fee:string,uniquecode:string)
    {
      let subjectdata=
      {
        "Tuitionname":Tuitionname,
        "location":location,
        "subject":subject,
        "fee":fee,
        "uniquecode":uniquecode
      }
      console.log(subjectdata);
      this.http.post<{ message: string; Subjectwisesetup: Subjectwisesetup_Interface }>("http://localhost:3000/api/subjectwise-setup", subjectdata)
      .subscribe(responseData => {
        var Subjectwisesetup: Subjectwisesetup_Interface = {
          id: responseData.Subjectwisesetup.id,
          Tuitionname:Tuitionname,
          location:location,
          subject:subject,
          fee:fee,
          uniquecode:uniquecode
        };
        console.log(responseData);
        this.subjectwisearray.push(Subjectwisesetup);
        this.subjectwiseUpdated.next([...this.subjectwisearray]);
        this.router.navigate(["/"]);
      });
    }
}
