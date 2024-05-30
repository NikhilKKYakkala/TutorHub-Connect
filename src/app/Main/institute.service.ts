import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institute } from './Institute.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class InstituteService {
  private Instuition:Institute[]=[];
  private instituteUpdated = new Subject<Institute[]>();

  constructor(private http:HttpClient,private router:Router) { }

  getinstitute()
  {

  }


  // ADDING TUITION
  addTuition(title: string, content: string,sub_content:string,no_of_faculty:string,year_of_establishment:string,phonenumber:string,email:string,website:string,address:string,image: File)
  {
      const Tuition = new FormData();
      Tuition.append("title", title);
      Tuition.append("content", content);
      Tuition.append("sub_content", sub_content);
      Tuition.append("no_of_faculty",no_of_faculty);
      Tuition.append("year_of_establishment",year_of_establishment);
      Tuition.append("phonenumber", phonenumber);
      Tuition.append("email", email);
      Tuition.append("website",website);
      Tuition.append("address",address);
      Tuition.append("image", image,title);
      this.http.post<{ message: string; institute: Institute }>("http://localhost:3000/api/institute", Tuition)
        .subscribe(responseData => {
          const tuition: Institute = {
            id: responseData.institute.id,
            title: title,
            content: content,
            sub_content:sub_content,
            no_of_faculty:no_of_faculty,
            year_of_establishment:year_of_establishment,
            phonenumber:phonenumber,
            email:email,
            website:website,
            address:address,
            imagePath: responseData.institute.imagePath
          };
          console.log(tuition);
          this.Instuition.push(tuition);
          this.instituteUpdated.next([...this.Instuition]);
          this.router.navigate(["/TuitionCreation"]);
        });
    }


    //GETTING TUITION BY ID
    gettingtuition(id: string) {
      return this.http.get<{
        _id: string;
        title: string;
        content: string;
        sub_content:string;
        no_of_faculty:string,
        year_of_establishment:string,
        phonenumber:string,
        email:string,
        website:string,
        address:string,
        imagePath: string;
      }>("http://localhost:3000/api/institute/" + id);
    }

}


