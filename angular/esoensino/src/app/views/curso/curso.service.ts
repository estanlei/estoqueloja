import { CursoClass } from './curso.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';

@Injectable()

export class CursoService{

    lista : CursoClass[] =  [  
        {CUR_ID : 1,CUR_NOME : "Ensino Médio",TIP_CUR_ID : 1, EMP_ID : 1},
        {CUR_ID : 2,CUR_NOME : "Ensino Fundamental",TIP_CUR_ID : 1, EMP_ID : 1},
        {CUR_ID : 3,CUR_NOME : "Informatica Básica",TIP_CUR_ID : 1, EMP_ID : 1},
        {CUR_ID : 4,CUR_NOME : "Visual Estudio",TIP_CUR_ID : 1, EMP_ID : 1},
        {CUR_ID : 5,CUR_NOME : "Matemática Basica",TIP_CUR_ID : 1, EMP_ID : 1},
        {CUR_ID : 6,CUR_NOME : "Gestão Ambiental",TIP_CUR_ID : 1, EMP_ID : 1},
        {CUR_ID : 7,CUR_NOME : "Gestão Financeira",TIP_CUR_ID : 1, EMP_ID : 1},
        {CUR_ID : 8,CUR_NOME : "Educação Fisica",TIP_CUR_ID : 1, EMP_ID : 1},
        {CUR_ID : 9,CUR_NOME : "Pratica Estrutural",TIP_CUR_ID : 1, EMP_ID : 1},
        {CUR_ID : 10,CUR_NOME : "Gerencia Financeira",TIP_CUR_ID : 1, EMP_ID : 1},
        {CUR_ID : 11,CUR_NOME : "Adm Empresas",TIP_CUR_ID : 1, EMP_ID : 1} ]

    constructor(private http: HttpClient){

    }
    getListaCursos(nome : string): CursoClass[]  {
    
        return this.lista.filter(x => x.CUR_NOME.toLowerCase().startsWith(nome.toLowerCase()))
    }
    geCurso(id : number): CursoClass {

        return this.lista.find(x => x.CUR_ID == id)
    }

}