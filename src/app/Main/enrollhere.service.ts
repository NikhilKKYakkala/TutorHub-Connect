import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Subjectwisesetup_Interface } from './subjectwise.model';
import { Subject } from 'rxjs';
import { enrollhereInterface } from './enrollhere.model';
import { tuitiondataInterface } from './tuitiondata.model';



@Injectable({
  providedIn: 'root'
})
export class EnrollhereService {

  constructor(private http:HttpClient,private router:Router) { }
  private subjectwisearray:Subjectwisesetup_Interface[]=[];
  private subjectwiseUpdated = new Subject<{Subject:Subjectwisesetup_Interface[];SubjectCount:number}>();

  private enrollherearray:enrollhereInterface[]=[];
  private enrollupdated = new Subject<enrollhereInterface[]>();

  private tuitiondataarray:tuitiondataInterface[]=[];
  private tuitiondataupdated = new Subject<tuitiondataInterface[]>();


  getSubjects(postsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    this.http.get<{message: string; Subjectwisesetup: any; maxSubject: number }>(
        "http://localhost:3000/api/subjectwise-setup" + queryParams).pipe(
        map(SubjectwiseData => {
          return {
            Subjects: SubjectwiseData.Subjectwisesetup.map(detailsSubjectWise => {
              return {
                Tuitionname: detailsSubjectWise.Tuitionname,
                location: detailsSubjectWise.location,
                subject: detailsSubjectWise.subject,
                fee: detailsSubjectWise.fee,
                uniquecode:detailsSubjectWise.uniquecode,
                id:detailsSubjectWise._id
              };
            }),
            maxPosts: SubjectwiseData.maxSubject
          };
        })
      )
      .subscribe(transformedPostData => {
        this.subjectwisearray = transformedPostData.Subjects;
        this.subjectwiseUpdated.next({
          Subject: [...this.subjectwisearray],
          SubjectCount: transformedPostData.maxPosts
        });
      });
  }

getSubjectUpdateListener() {
  return this.subjectwiseUpdated.asObservable();
}

postsubjectviauserid(subjectid:string,userid:string,tuitionname:string,location:string,course:string,fee:string,status:string)
{
  let data={
    "subjectid":subjectid,
    "userid":userid,
    "tuitionname":tuitionname,
    "location":location,
    "course":course,
    "fee":fee,
    "status":status,
  }
  this.http.post<{ message: string; enrollhere: enrollhereInterface }>("http://localhost:3000/api/enrollment", data)
  .subscribe(responseData => {
    const enrollment: enrollhereInterface = {
      id: responseData.enrollhere.id,
      subjectid:subjectid,
      userid:userid,
      tuitionname:tuitionname,
      location:location,
      course:course,
      fee:fee,
      status:status
    };
    this.enrollherearray.push(enrollment);
    this.enrollupdated.next([...this.enrollherearray]);
    this.router.navigate(["/Home"]);
  });
}

storingdatafortuition(subjectid:string,userid:string,tuitionname:string,email:string,studentname:string,course:string,tstatus:string)
{
  let data={
    "subjectid":subjectid,
    "userid":userid,
    "tuitionname":tuitionname,
    "email":email,
    "studentname":studentname,
    "course":course,
    "tstatus":tstatus
  }
  this.http.post<{ message: string; tuitiondata: tuitiondataInterface }>("http://localhost:3000/api/tuitionstatus", data)
  .subscribe(responseData => {
    const tuitiondata: tuitiondataInterface = {
      id: responseData.tuitiondata.id,
      subjectid:subjectid,
      userid:userid,
      tuitionname:tuitionname,
      email:email,
      studentname:studentname,
      course:course,
      tstatus:tstatus
    };
    this.tuitiondataarray.push(tuitiondata);
    this.tuitiondataupdated.next([...this.tuitiondataarray]);
    this.router.navigate(["/Home"]);
  });
}
}

