import { Component, OnInit, OnDestroy, ViewChild, Inject } from '@angular/core';
import { EnrollhereService } from '../enrollhere.service';
import { Subjectwisesetup_Interface } from '../subjectwise.model';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/Auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-enrollhere',
  templateUrl: './enrollhere.component.html',
  styleUrls: ['./enrollhere.component.css']
})
export class EnrollhereComponent implements OnInit,OnDestroy {

  subject:Subjectwisesetup_Interface[]=[];
  private subjectssub:Subscription;

  dataSource  = new MatTableDataSource(this.subject);


  @ViewChild(MatSort, {static: true}) sort: MatSort;

  isLoading=false;
  totalSubject = 0;
  postsPerPage = 10;
  currentPage = 1;
  pageSizeOptions = [10,12];
  displayedColumns:string[]=['position','Tuitionname','location','subject','fee','uniquecode','enrollhere'];



  constructor(private enrollhereservice:EnrollhereService,private  authService: AuthService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.enrollhereservice.getSubjects(this.postsPerPage, this.currentPage);
    this.subjectssub=this.enrollhereservice.getSubjectUpdateListener()
    .subscribe((SubjectData:{Subject:Subjectwisesetup_Interface[],SubjectCount:number})=>{
      this.isLoading=false;
      this.totalSubject=SubjectData.SubjectCount;
      this.subject=SubjectData.Subject;
      this.dataSource  = new MatTableDataSource(this.subject);
      this.dataSource.sort = this.sort;
    });
    }

    applyFilter(event:Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      console.log(filterValue)
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.enrollhereservice.getSubjects(this.postsPerPage, this.currentPage);
  }
  enrollhere(elements)
  {
    // console.log(elements);
    const token=this.authService.getID();
    const email=this.authService.getmail();
    const studentname=this.authService.getname();
    let userid=token;
    let subjectid=elements.id;
    let tuitionname=elements.Tuitionname;
    let location=elements.location;
    let course=elements.subject;
    let fee=elements.fee;
    const status="Yet to confirm";
    const tstatus="Yet to accept";
    //window.alert("Thanks for registration with "+ tuitionname +" in the course "+ course);
    this.enrollhereservice.postsubjectviauserid(subjectid,userid,tuitionname,location,course,fee,status);
    this.enrollhereservice.storingdatafortuition(subjectid,userid,tuitionname,email,studentname,course,tstatus);
    const dialog="Thanks for registration with "+ tuitionname +" in the Subject "+course+". They will contact you soon." ;
    this.dialog.open(DialogElementsExampleDialog,{data:{msg:dialog}});
    //console.log(subjectid,userid,tuitionname,location,course,fee);
    // console.log(email,name);
  }

  ngOnDestroy()
  {
    this.subjectssub.unsubscribe();
  }

}

//DIALOG BOX COMPONENT
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogElementsExampleDialog {
   constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}


