import { Empresa } from './empresa.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Filtro } from 'src/app/model/filtro.class';

@Injectable()

export class EmpresaService{
    defaultUrl = 'https://localhost:44390/api/empresa/';     

    constructor(private http: HttpClient){

    }
    getLista(param : Filtro): Observable<Empresa[]>  {
        
        let url = this.defaultUrl+"get?queryStr="+ JSON.stringify(param);

        return this.http.get<Empresa[]>(url)
        .pipe(
          retry(1),
          catchError(this.errorHandl)
        )
    }
    getByID(id): Observable<Empresa> {

        return  this.http.get<Empresa>(this.defaultUrl + '/get/' + id);
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