
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';
import { Sala } from './sala.class';

@Injectable()

export class SalaService{

    defaultUrl = 'esoescola/api';

    lista : Sala[]  = [
        {SAL_ID: 1,SAL_DESCRICAO:"5° SERIE", SAL_QTDEALUNOS :2},
        {SAL_ID: 2,SAL_DESCRICAO:"6° SERIE", SAL_QTDEALUNOS :5},
        {SAL_ID: 3,SAL_DESCRICAO:"7° SERIE", SAL_QTDEALUNOS :6},
        {SAL_ID: 4,SAL_DESCRICAO:"8° SERIE", SAL_QTDEALUNOS :3}];
        
      
    constructor(private http: HttpClient){

    }
    getLista(nome : string): Sala[]  {
    
        return this.lista.filter(x => x.SAL_DESCRICAO.toLowerCase().startsWith(nome.toLowerCase()))
    }
    getByID(id : number): Sala {

        let sala = this.lista.find(x => x.SAL_ID == id);
        
        if (sala == undefined)
        {
            sala = new Sala()
        }

        return sala;
    }

    salvar(itens: any):void {
           alert("0");

      // this.http.get<salaClass>(this.defaultUrl,{ entity: itens });
    }
    excluir(itens: any):void {
        alert("2");
    }
    refresh(itens: any):void {
        alert("3");
    }
 

}