import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institute } from '../Institute.model';
import { InstituteService } from '../institute.service';

@Component({
  selector: 'app-institute-page',
  templateUrl: './institute-page.component.html',
  styleUrls: ['./institute-page.component.css']
})
export class InstitutePageComponent implements OnInit {


  constructor(private instituteService:InstituteService) { }
  institute=[
    {id:'5ec28ef80dbea21714ed1f80',title:'Vivekananda Foundation',content:' Learn Languages In A Small Group Course With Students, Employees,  Professionals, Executives,<br> Business Men  And Housewives And The Ambitious.',ImagePath:'../../../assets/Images/inst1.png'},
    {id:'5ec28ffc0dbea21714ed1f81',title:'Raga Tuitions',content:'The students and home tutors can also request call back and our customer support team can <br> get them registered for free.',ImagePath:'../../../assets/Images/inst2.png'},
    {id:'5ec290920dbea21714ed1f82',title:'Brilliant Academy',content:'We helped 1500 students, who had supplies ranging from 10 subjects to 30 subjects..... Brilliant',ImagePath:'../../../assets/Images/inst3.png'},
    {id:'5ec291140dbea21714ed1f83',title:'Melhor Institution',content:'We offer intensive one to one language courses in the homes of trainers around the India.',ImagePath:'../../../assets/Images/inst4.png'},
    {id:'5ec291f40dbea21714ed1f84',title:'Prasads Educational Institution',content:'The institute provides a wide variety of career,professional,short term and certification courses,<br>designed by our expert academicians after careful market study and research.',ImagePath:'../../../assets/Images/inst5.png'},
    {id:'5ec2925a0dbea21714ed1f85',title:'Teaching Fish',content:'TF Hyderabad is 8 years old today and without doubt is the No1 brand in spoken English in <br> city.',ImagePath:'../../../assets/Images/inst6.png'},
    {id:'5ec292e60dbea21714ed1f86',title:'Srinivasa Coaching Center',content:'Coaching for intermediate eamcet entrance, 10th class , foundation of IIT, VedicMaths, Schools.',ImagePath:'../../../assets/Images/inst7.png'},
    {id:'5ec293870dbea21714ed1f87',title:'Home Tuitions',content:'HomeTuitionsInHyderabad is the education service provider company.  It supplies the  qualified <br>tutors and monitors the performance of the students',ImagePath:'../../../assets/Images/inst8.png'},
    {id:'5ec293ec0dbea21714ed1f88',title:'Prism Coaching Center',content:'Prism Forum For IIT JEE & Medical in Dilsukhnagar, Hyderabad is a top player in the category <br> Tutorials in the Hyderabad.',ImagePath:'../../../assets/Images/inst9.png'},
    {id:'5ec2945f0dbea21714ed1f89',title:'Hemtor Tuitions',content:'Hemtor Learning Pvt Ltd in Nallakunta, Hyderabad is a top player in the category IIT Tutorials <br>in the Hyderabad.',ImagePath:'../../../assets/Images/inst10.png'}
  ]

  ngOnInit(): void {
    this.instituteService.getinstitute();
  }


}
