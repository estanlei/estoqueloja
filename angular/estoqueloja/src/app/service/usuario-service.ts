import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { usuario } from '../usuario/usuario.class';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()

export class UsuarioService {

  defaultUrl = 'https://localhost:44322/api/usuario/';

  constructor(private http: HttpClient) { }

  getLista(nome: string): Observable<usuario[]> {

    let params = new HttpParams();
    params = params.append('nome', nome);

    let url = this.defaultUrl + "Listar";

    return this.http.get<usuario[]>(url, { params: params })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

  }

  getByID(id: any): Observable<usuario> {

    let params = new HttpParams();

    params = params.append('login', id);

    let url = this.defaultUrl + "Buscar";

    return this.http.get<usuario>(url, { params: params })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

  }

  realizarLogin(login: string, senha: string): Observable<usuario> {

    let params = new HttpParams();

    params = params.append('login', login);
    params = params.append('senha', senha);

    let url = this.defaultUrl + "Logar";

    return this.http.get<usuario>(url, { params: params })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

  }
  incluir(item: usuario) {
    let url = this.defaultUrl + "Post";
    this.http.post(url, item)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
      .subscribe(res => console.log('Incluído'));
  }

  editar(item: usuario) {
    let url = this.defaultUrl + "Post";
    this.http.post(url, item)
      .pipe(
        catchError(this.errorHandl)
      )
      .subscribe(res => console.log('Alterado'));
  }

  excluir(item: usuario) {
    let params = new HttpParams();

    params = params.append('id', item.USU_LOGIN);

    let url = this.defaultUrl + "Delete";

    this.http.get(url, { params: params })
      .pipe(
        retry(1),
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

    alert("Erro => " + errorMessage);
    return throwError(errorMessage);
  }

}
