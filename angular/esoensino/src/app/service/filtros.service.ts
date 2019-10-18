import { FiltroClass } from '../model/filtro.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()


export class FiltrosService{

    lista : FiltroClass[] =  [  
        {FIL_ID : 2, FIL_DESCRICAO : "Nome", FIL_TIPO : "S", FIL_COMPONENTE: "",EMP_ID : 1, FIL_SEQTELA : 0, FIL_VALUE : ""},
        {FIL_ID : 3, FIL_DESCRICAO : "Data", FIL_TIPO : "D", FIL_COMPONENTE: "",EMP_ID : 1, FIL_SEQTELA : 0, FIL_VALUE : ""},
        {FIL_ID : 4, FIL_DESCRICAO : "Turma", FIL_TIPO : "S", FIL_COMPONENTE: "",EMP_ID : 1, FIL_SEQTELA : 0, FIL_VALUE : ""},
        {FIL_ID : 5, FIL_DESCRICAO : "Professor", FIL_TIPO : "S", FIL_COMPONENTE: "",EMP_ID : 1, FIL_SEQTELA : 0, FIL_VALUE : ""}
      ]

    constructor(private http: HttpClient){

    }
    getListaFiltros(): FiltroClass[] {

        return this.lista 
    }

}