import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { produto } from '../produto/produto.class';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()


export class ProdutoService {

  defaultUrl = 'https://localhost:44322/api/produto/';

  constructor(private http: HttpClient) { }

  getLista(id: any, nome: any): Observable<produto[]> {

    let params = new HttpParams();

    params = (id != null) ? params.append('id', id.toString()) : params.append('id', '0');
    params = params.append('nome', nome);

    let url = this.defaultUrl + "Listar";

    return this.http.get<produto[]>(url, { params: params })
      .pipe(
        catchError(this.errorHandl)
      )

  }

  getByID(id: any): Observable<produto> {
    return this.http.get<produto>(this.defaultUrl + 'Buscar/' + id)
      .pipe(
        catchError(this.errorHandl)
      )

  }

  incluir(item: produto) {
    let url = this.defaultUrl + "Post";
    this.http.post(url, item)
      .pipe(
        catchError(this.errorHandl)
      )
      .subscribe(res => console.log('Incluído'));
  }

  editar(item: produto) {
    let url = this.defaultUrl + "Post";
    this.http.post(url, item)
      .pipe(
        catchError(this.errorHandl)
      )
      .subscribe(res => console.log('Alterado'));
  }

  excluir(item: produto) {

    this.http.get(this.defaultUrl + 'Delete/' + item.PRO_ID)
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
    console.log(errorMessage);

    alert(errorMessage);

    return throwError(errorMessage);
  }
}
