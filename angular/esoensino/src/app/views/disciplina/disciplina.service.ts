import { Disciplina } from './disciplina.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DisciplinaService{

    lista : Disciplina[] =  [  
        {DIS_ID : 1,DIS_NOME : "disciplina TESTE"},
        {DIS_ID : 2,DIS_NOME : "disciplina TESTE 01"} ]

    constructor(private http: HttpClient){

    }
    getLista(nome : string): Disciplina[]  {
    
        return this.lista.filter(x => x.DIS_NOME.toLowerCase().startsWith(nome.toLowerCase()))
    }
    getByID(id : number): Disciplina {

        return this.lista.find(x => x.DIS_ID == id)
    }

}