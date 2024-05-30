import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { InstituteService } from '../institute.service';
import {Institute} from '../Institute.model';
@Component({
  selector: 'app-individual-tuition',
  templateUrl: './individual-tuition.component.html',
  styleUrls: ['./individual-tuition.component.css']
})
export class IndividualTuitionComponent implements OnInit {

  Tuitionid="";
  Tuition:Institute;
  individualtuition:Institute;
  isLoading =true;
  constructor(private route:ActivatedRoute,private instituteService:InstituteService) { }

  ngOnInit(): void {
    this.Tuitionid=this.route.snapshot.params.Tuitionid;
    // console.log(this.route.snapshot.params);
    this.instituteService.gettingtuition(this.Tuitionid).subscribe(Tuitiondata=>{
      this.Tuition={
        id:Tuitiondata._id,
        title:Tuitiondata.title,
        content:Tuitiondata.content,
        sub_content:Tuitiondata.sub_content,
        no_of_faculty:Tuitiondata.no_of_faculty,
        year_of_establishment:Tuitiondata.year_of_establishment,
        phonenumber:Tuitiondata.phonenumber,
        website:Tuitiondata.website,
        email:Tuitiondata.email,
        address:Tuitiondata.address,
        imagePath:Tuitiondata.imagePath
      }
      // this.individualtuition=this.Tuition;
      // console.log(this.Tuition);
      this.isLoading=false;
    })

  }


}
