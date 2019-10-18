
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';
import { TurmaClass } from './turma.class';

@Injectable()

export class TurmaService{

    defaultUrl = 'esoescola/api';

    lista : TurmaClass[]  = [
        {TUR_ID: 1,TUR_NOME:"5° SERIE", CUR_ID :2, TUR_ANOSERIE : "2019", TUR_PERIODO : "Manhã",
        TUR_ANOLETIVO : "2019",
        TUR_ANOGRADE : "2019",
        TUR_DATINI : "01/01/2019",
        TUR_DATFIM : "01/01/2019",
        TUR_QTDEALUNOS : 10,
        TIP_TUR_ID : 1,
        ESC_ID : 1,
        SAL_ID : "SALA 2",
        EMP_ID : 1},
        {TUR_ID: 2,TUR_NOME:"6° SERIE",    CUR_ID : 5,
        TUR_ANOSERIE : "2019",
        TUR_PERIODO : "Manhã",
        TUR_ANOLETIVO : "2019",
        TUR_ANOGRADE : "2019",
        TUR_DATINI : "01/01/2019",
        TUR_DATFIM : "01/01/2019",
        TUR_QTDEALUNOS : 10,
        TIP_TUR_ID : 1,
        ESC_ID : 1,
        SAL_ID : "SALA 2",
        EMP_ID : 1},
        {TUR_ID: 3,TUR_NOME:"7° SERIE",    CUR_ID : 6,
        TUR_ANOSERIE : "2019",
        TUR_PERIODO : "Manhã",
        TUR_ANOLETIVO : "2019",
        TUR_ANOGRADE : "2019",
        TUR_DATINI : "01/01/2019",
        TUR_DATFIM : "01/01/2019",
        TUR_QTDEALUNOS : 10,
        TIP_TUR_ID : 1,
        ESC_ID : 1,
        SAL_ID : "SALA 2",
        EMP_ID : 1},
        {TUR_ID: 4,TUR_NOME:"8° SERIE",    CUR_ID : 3,
        TUR_ANOSERIE : "2019",
        TUR_PERIODO : "Tarde",
        TUR_ANOLETIVO : "2019",
        TUR_ANOGRADE : "2019",
        TUR_DATINI : "01/01/2019",
        TUR_DATFIM : "01/01/2019",
        TUR_QTDEALUNOS : 10,
        TIP_TUR_ID : 1,
        ESC_ID : 1,
        SAL_ID : "SALA 2",
        EMP_ID : 1},
        {TUR_ID: 5,TUR_NOME:"8° SERIE",    CUR_ID : 1,
        TUR_ANOSERIE : "2019",
        TUR_PERIODO : "Noite",
        TUR_ANOLETIVO : "2019",
        TUR_ANOGRADE : "2019",
        TUR_DATINI : "01/10/2019",
        TUR_DATFIM : "01/01/2019",
        TUR_QTDEALUNOS : 20,
        TIP_TUR_ID : 2,
        ESC_ID : 1,
        SAL_ID : "SALA 2",
        EMP_ID : 1}];
        
      
    constructor(private http: HttpClient){

    }
    getListaTurma(nome : string): TurmaClass[]  {
    
        return this.lista.filter(x => x.TUR_NOME.toLowerCase().startsWith(nome.toLowerCase()))
    }
    getTurma(id : number): TurmaClass {

        return this.lista.find(x => x.TUR_ID == id)
    }

    salvar(itens: any):void {
           alert("0");

      // this.http.get<TurmaClass>(this.defaultUrl,{ entity: itens });
    }
    excluir(itens: any):void {
        alert("2");
    }
    refresh(itens: any):void {
        alert("3");
    }
 

}