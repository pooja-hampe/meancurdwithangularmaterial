import { Component,ViewChild,AfterViewInit, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CsvapiService } from '../csvservice/csvapi.service';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: 'app-csvfile',
  templateUrl: './csvfile.component.html',
  styleUrls: ['./csvfile.component.css']
})
export class CsvfileComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'age', 'mobilenumber'];
  dataSource = new MatTableDataSource<any>;

  @ViewChild('fileImportInput') fileImportInput: any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  header!: false;
  csvRecords!: any[];
  
  constructor(private api:CsvapiService,
    private ngxCsvParser: NgxCsvParser){}

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    this.getallcsv()
  }
  getallcsv(){
    this.api.getcsv()
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.dataSource = new MatTableDataSource(<any>res);
        this.dataSource.paginator= this.paginator;
      },
      error(err){
        console.log(err)
      }
    })
  };

  //csv 
   fileChangeListener($event: any): void {
        const files = $event.srcElement.files;
      
        this.ngxCsvParser
            .parse(files[0], {
                header: this.header,
                delimiter: ',',
            }).pipe()
            .subscribe((result:Array<any>) => {
                    console.log('Result', result);
                     this.csvRecords = result;
                    
                 
                },
                (error) => {
                    console.log('Error', error);
                }
            );
            
   }
    
}


