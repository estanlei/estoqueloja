
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { log } from '../log/log.class';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()

export class LogService {

  defaultUrl = 'https://localhost:44322/api/log/';

  constructor(private http: HttpClient) {


  }

  getLista(msg: string, login: string, produto: number): Observable<log[]> {

    let params = new HttpParams();
    params = params.append('msg', msg);
    params = params.append('login', login);
    params = (produto != null) ? params.append('produto', produto.toString()) : params.append('produto', '0');

    let url = this.defaultUrl + "Listar";

    return this.http.get<log[]>(url, { params: params })
      .pipe(
        catchError(this.errorHandl)
      )

  }

  getByID(id: any): Observable<log> {
    return this.http.get<log>(this.defaultUrl + 'Buscar/' + id)
      .pipe(
        catchError(this.errorHandl)
      )

  }

  incluir(item : log) {
      this.http.post(`${this.defaultUrl}/Post`, item)
                .pipe(
                  catchError(this.errorHandl)
                )
               .subscribe(res => console.log('Incluído'));
  }

  excluir(id: any): Observable<log> {
    return this.http.delete<log>(this.defaultUrl + 'delete/' + id)
      .pipe(
        catchError(this.errorHandl)
      );

  }
  
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    alert(errorMessage);

    return throwError(errorMessage);
  }
}
