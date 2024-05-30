import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http:HttpClient,private router:Router) { }

  gettingstudentdata(id: string) {
    //console.log(id)
    return this.http.get("http://localhost:3000/api/enrollment/" + id);
  }
}


/*
    id:string;
    subjectid:string;
    userid:string;
    tuitionname:string;
    location:string;
    course:string;
    fee:string;
    status:string
*/
