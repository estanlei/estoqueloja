import { Aluno } from './aluno.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class AlunoService{
    defaultUrl = 'https://localhost:44390/api/aluno/';     


    constructor(private http: HttpClient){

    }
    getLista(nome : string): Observable<Aluno[]>  {
        
        let url = this.defaultUrl+"get";

        return this.http.get<Aluno[]>(url)
        .pipe(
          retry(1),
          catchError(this.errorHandl)
        )
    }
    getByID(id : number): Observable<Aluno> {

        return  this.http.get<Aluno>(this.defaultUrl + '/get/' + id);
    }
    
    errorHandl(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
      //  console.log(errorMessage);
        alert(errorMessage);
        return throwError(errorMessage);
     }
}