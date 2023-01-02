import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CsvapiService {
  
  // api: string = "http://localhost:3000/posts";
  constructor(private http:HttpClient
    ) { }

   addcsv(data:any){
    return this.http.post<any>("http://localhost:3000/posts/",data);
   } 

  getcsv(){
    return this.http.get<any>("http://localhost:3000/posts/");
  }
  
}
