import { Component,OnInit,NgZone, Inject, inject } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatFormFieldControl } from '@angular/material/form-field';


@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit{
//  updateemploye!:FormGroup;
editemploye = new FormGroup({
  employename: new FormControl(''),
  employeemail: new FormControl(''),
  chooseadate: new FormControl(''),
  employeaddress: new FormControl(''),
  country: new FormControl(''),
})
 
// _id:any
constructor(private formBuilder:FormBuilder,
            private ngZone:NgZone,
            private router:ActivatedRoute,
            private curdApi:ApiService,
          
  ){  }
  

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
     this.curdApi.getemploye(this.router.snapshot.params['id'])
     .subscribe((res)=>{
           console.log(res)
        this.editemploye = new FormGroup({
            employename: new FormControl(res.employename),
            employeemail: new FormControl(res.employeemail),
            chooseadate: new FormControl(res.chooseadate),
            employeaddress: new FormControl(res.employeaddress),
            country: new FormControl(res.country),
          })
     })
    
  }
  onUpdate(){
     console.log(this.editemploye.value)
     this.curdApi.updateemploye(this.router.snapshot.params['id'],this.editemploye.value)
     .subscribe((res)=>{
      alert('Employe Updated Successfully!!')
     })

  }
   
}

