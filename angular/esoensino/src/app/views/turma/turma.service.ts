import { Turma } from "./turma.class";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';
import { Observable, throwError, ObservableInput } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Filtro } from 'src/app/model/filtro.class';


@Injectable()

export class TurmaService{

    defaultUrl = 'https://localhost:44390/api/Turma/';       
      
    constructor(private http: HttpClient){

  
    }

  // POST
   // CreateBug(data): Observable<Bug> {
   //     return this.http.post<Bug>(this.baseurl + '/bugtracking/', JSON.stringify(data), this.httpOptions)
   //     .pipe(
   //     retry(1),
 //      catchError(this.errorHandl)
 //       )
  //  } 

    getLista(param : Filtro) : Observable<Turma[]> {
      
        let params = new HttpParams();
       // param.PER_ID.toString()
       let tipo = param.TIP_TUR_ID.toString()
       //param.CUR_ID.toString()
       // Begin assigning parameters
       params = params.append('turnome', param.TUR_NOME);
       params = params.append('perid', '0');
       params = params.append('tipturid','0' );
       params = params.append('curid','0');

       // params = params.append('queryStr', param.TUR_NOME);

        //let url = this.defaultUrl+"Listar?queryStr="+ JSON.stringify(param);
        let url = this.defaultUrl+"Listar";

        return this.http.get<Turma[]>(url,{params:params})
        .pipe(
          catchError(this.errorHandl)
        )
  
    }

    getByID(id): Observable<Turma> {
         return this.http.get<Turma>(this.defaultUrl + 'Buscar/' + id) 
         .pipe(
           catchError(this.errorHandl)
          )

      }


    salvar(itens: any):void {
           alert("0");
    }
    excluir(itens: any):void {
        alert("2");
    }
    refresh(itens: any):void {
        alert("3");
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
        console.log(errorMessage);
 
        return throwError(errorMessage);
     }

}