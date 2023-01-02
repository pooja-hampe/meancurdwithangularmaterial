
import { Component,AfterViewInit,ViewChild,OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { MatTableExporterDirective } from 'mat-table-exporter/lib/mat-table-exporter.directive';
import { MatTableExporterModule } from 'mat-table-exporter/lib/mat-table-exporter.module';
import { Employe } from '../employe';
import { ApiService } from '../services/api.service';




@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})


export class ListEmployeComponent implements OnInit {
  // rows:any=[];
  displayedColumns: string[] = ['_id','employename','employeemail','chooseadate','employeaddress',
                                 'country','action'];

  dataSource!: MatTableDataSource<Employe>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild("exporter") exporter!: MatTableExporterDirective;
constructor(private curdApi:ApiService , private router:Router){}

 
ngOnInit():void{
 this.getemployes();
 
  }
  getemployes(){
    this.curdApi.getemployes()
    .subscribe({
      next:(res)=>{
           console.log(res)
           this.dataSource = new MatTableDataSource(<any>res);
           this.dataSource.paginator= this.paginator;
           this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert('error while adding records')
      }

    })
  }
  deleteemploye(id:any){
    this.curdApi.deleteemploye(id)
    .subscribe({
      next:(res)=>{
        alert("Employes Deleted Successfully")
      },
      error:()=>{
        alert("Error while deleting the employe!!")
      }
    })

  }


  

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
 }

}
 