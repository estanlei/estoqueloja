import { Professor } from './professor.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';

@Injectable()

export class ProfessorService{

    lista : Professor[] =  [  
        {PRO_ID : 1,PRO_NOME : "Professor TESTE"},
        {PRO_ID : 2,PRO_NOME : "Professor TESTE 01"} ]

    constructor(private http: HttpClient){

    }
    getLista(nome : string): Professor[]  {
    
        return this.lista.filter(x => x.PRO_NOME.toLowerCase().startsWith(nome.toLowerCase()))
    }
    getByID(id : number): Professor {

        return this.lista.find(x => x.PRO_ID == id)
    }

}