import { Periodo } from './periodo.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';

@Injectable()

export class PeriodoService{

    lista : Periodo[] =  [  
        {PER_ID : 1,PER_DESCRICAO : "Manhã"},
        {PER_ID : 2,PER_DESCRICAO : "tarde"},
        {PER_ID : 3,PER_DESCRICAO : "Noite"} ]

    constructor(private http: HttpClient){

    }
    getLista(nome : string): Periodo[]  {
    
        return this.lista.filter(x => x.PER_DESCRICAO.toLowerCase().startsWith(nome.toLowerCase()))
    }
    getByID(id : number): Periodo {

        return this.lista.find(x => x.PER_ID == id)
    }

}