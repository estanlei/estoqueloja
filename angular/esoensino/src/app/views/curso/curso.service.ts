import { CursoClass } from './curso.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable()

export class CursoService{

    defaultUrl = 'https://localhost:44390/api/curso/';      

    constructor(private http: HttpClient){

    }
    getListaCursos(nome : string): Observable<CursoClass[]>  {
    
        let url = this.defaultUrl+"Listar?queryStr="+nome;

        return this.http.get<CursoClass[]>(url)
        .pipe(
          retry(1),
          catchError(this.errorHandl)
        )
    }
    getCursoByID(id : number): Observable<CursoClass> {

        return this.http.get<CursoClass>(this.defaultUrl + 'get/' + id);
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