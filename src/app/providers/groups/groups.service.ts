import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from './groups';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class GroupsService {
  
  baseurl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  // POST
  CreateGroup(data): Observable<Group> {
    return this.http.post<Group>(this.baseurl + '/grouptracking/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } 

  // GET
  /*GetGroup(id): Observable<Group> {
    return this.http.get<Group>(this.baseurl + '/grouptracking/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }*/

  // GET
  GetGroup(): Observable<Group> {
    return this.http.get<Group>(this.baseurl + '/grouptracking/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // PUT
  UpdateGroup(id, data): Observable<Group> {
    return this.http.put<Group>(this.baseurl + '/grouptracking/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // DELETE
  DeleteGroup(id){
    return this.http.delete<Group>(this.baseurl + '/grouptracking/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }


  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
