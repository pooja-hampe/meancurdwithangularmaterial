import { Component,OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';

import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CsvapiService } from '../csvservice/csvapi.service';

@Component({
  selector: 'app-csvaddfile',
  templateUrl: './csvaddfile.component.html',
  styleUrls: ['./csvaddfile.component.css']
})
export class CsvaddfileComponent implements OnInit{
 
  csvform!:FormGroup;
  constructor(
    private api:CsvapiService,
    private ngzone:NgZone,
    private router:Router,
    private formbuilder:FormBuilder,
    private http:HttpClient
    ){

     this.csvform = this.formbuilder.group({
        name:[''],
        age:[''],
        mobilenumber:['']

     })
      
    }

  onsave(){
  console.log(this.csvform.value);
  this.api.addcsv(this.csvform.value)
 .subscribe({
  next:(res)=>{
    alert("csv add succuessfully!!")
    this.ngzone.run(() => this.router.navigateByUrl('/csvfile'));
  },

  
  error:()=>{
    alert('error ehile adding csv')
  }
})
   }
  ngOnInit(): void {
    
  }
}
