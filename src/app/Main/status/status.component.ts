import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/Auth/auth.service';
import { StatusService } from '../status.service';
import {enrollhereInterface} from '../enrollhere.model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  id="";
  Studentdata:enrollhereInterface[]=[];


  dataSource  = new MatTableDataSource(this.Studentdata);

  displayedColumns:string[]=['position','tuitionname','location','course','fee','status'];


  constructor(private statusservice:StatusService,private  authService: AuthService) { }

  ngOnInit(): void {
    this.id=this.authService.getID();
    //console.log(this.id)
    this.statusservice.gettingstudentdata(this.id).subscribe(Studentdata=>{
      this.Studentdata= Studentdata['documents'];
      //console.log(this.Studentdata);
      this.dataSource  = new MatTableDataSource(this.Studentdata);

    })
  }
}






