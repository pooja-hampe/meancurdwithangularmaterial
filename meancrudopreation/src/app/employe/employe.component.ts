
import { Component ,OnInit,NgZone } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';





@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employeForm:FormGroup;

  constructor(private formBuilder : FormBuilder,
     private curdApi:ApiService,
     private router:Router,
     private ngZone:NgZone,
     private employe : MatDialog
     
    ){

      this.employeForm = this.formBuilder.group({
        employename: ['',Validators.required],
        employeemail: ['',Validators.required],
        chooseadate: ['',Validators.required],
        employeaddress: ['',Validators.required],
        country: ['',Validators.required]
  
       })
      
       
   
    }

  ngOnInit(): void {
    
      }

      
  onSubmit(){
    if(this.employeForm.valid){
      this.curdApi.addemploye(this.employeForm.value)
      .subscribe({
        next:(res)=>{
          alert("Employe added successfully"),
         
         this.ngZone.run(() => this.router.navigateByUrl('/list-employe'));
        },
        error:()=>{
          alert("Error while adding employe")
        }
      })
    }
  }



  

}
