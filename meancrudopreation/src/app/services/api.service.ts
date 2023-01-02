import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable , throwError,} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Employe } from '../employe';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://localhost:4000/api';

  HttpHeaders = new HttpHeaders().set('Content-Type','application/json')
  

  constructor(private http: HttpClient) { }

  //add employe

  addemploye(data: Employe): Observable <any>{
    let url = `${this.url}/addemploye`;
    return this.http.post(url,data).pipe(catchError(this.handleError))
  }
  
  //get all employe
  getemployes(){
    return this.http.get(`${this.url}`)
  }

  //get single employe
  getemploye(id:any): Observable <any>{
    let url = `${this.url}/getemploye/${id}`;
    return this.http.get(url,{headers:this.HttpHeaders}).pipe(map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
    )
  }

  //update employe

  updateemploye(id:any,data:any):Observable<any>{
    let url = `${this.url}/updateemploye/${id}`;
    return this.http.put(url,data, {headers:this.HttpHeaders}).pipe
    (
      catchError(this.handleError)
    )
  }

  //delete employe

  deleteemploye(id:any):Observable<any>{
    let url = `${this.url}/deleteemploye/${id}`;
    return this.http.delete(url, {headers:this.HttpHeaders}).pipe
    (
      catchError(this.handleError)
    )
  }
  
 //Error
 handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(() => {
    return errorMessage;
  });

  
}
// DBapi!: 'http://localhost:3000/csvfile';
//csv api service

 }

