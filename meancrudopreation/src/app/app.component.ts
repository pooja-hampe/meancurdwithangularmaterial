import { Component} from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeComponent } from './employe/employe.component';
import { ApiService } from './services/api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'meancrudopreation';
 
  constructor(private employe : MatDialog , private curdApi: ApiService){}

  openDialog(){
    this.employe.open(EmployeComponent,{
     width:'30%'
    })
  }
  


 
}



