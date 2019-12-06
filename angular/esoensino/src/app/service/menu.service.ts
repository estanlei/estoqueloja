import { MenuClass } from '../model/menu.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()


export class MenuService{

    lista : MenuClass[] =  [
        {MEN_ID : 1, MEN_DESCRICAO : "Cadastro", MEN_LOGO : "", MEN_PATH: "", MEN_ACESSO : true, 
        ITEM_MENU : [ {MEN_ID : 4, MEN_DESCRICAO : "Aluno", MEN_LOGO : "", MEN_PATH: "/aluno", MEN_ACESSO : true,  ITEM_MENU : null},
                      {MEN_ID : 5, MEN_DESCRICAO : "Curso", MEN_LOGO : "", MEN_PATH: "/curso", MEN_ACESSO : true,  ITEM_MENU : null},
                      {MEN_ID : 6, MEN_DESCRICAO : "Disciplina", MEN_LOGO : "", MEN_PATH: "/disciplina", MEN_ACESSO : true,  ITEM_MENU : null},
                      {MEN_ID : 7, MEN_DESCRICAO : "Escola", MEN_LOGO : "", MEN_PATH: "/escola", MEN_ACESSO : true,  ITEM_MENU : null},
                      {MEN_ID : 8, MEN_DESCRICAO : "Professor", MEN_LOGO : "", MEN_PATH: "/professor", MEN_ACESSO : true,  ITEM_MENU : null},
                      {MEN_ID : 8, MEN_DESCRICAO : "Turma", MEN_LOGO : "", MEN_PATH: "/turma", MEN_ACESSO : true,  ITEM_MENU : null},
                    ]
       },
        {MEN_ID : 2, MEN_DESCRICAO : "Financeiro", MEN_LOGO : "", MEN_PATH: "",MEN_ACESSO : true, ITEM_MENU : null},
        {MEN_ID : 3, MEN_DESCRICAO : "Configurações", MEN_LOGO : "",MEN_PATH: "",  MEN_ACESSO : true, ITEM_MENU : null}
      ]

    constructor(private http: HttpClient){

    }
    getListaMenu(): MenuClass[] {

        return this.lista 
    }
    getListaCep(): any {

        return this.http.get(`https://viacep.com.br/ws/01001000/json/`)
                         .subscribe(response => response.toString())
    }
}