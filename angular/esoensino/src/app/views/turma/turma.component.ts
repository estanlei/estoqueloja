import { Component, OnInit } from '@angular/core';
import { FiltroClass } from 'src/app/model/filtro.class';
import { TurmaService } from './Turma.Service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html'
})
export class TurmaComponent implements OnInit {

  lstturma : any[]
  lstfiltro: FiltroClass []

  constructor(private srvTurma : TurmaService ) {
   
   }

  ngOnInit() {
   
  }

  listar(param: FiltroClass[]) {
    this.lstturma = this.srvTurma.getListaTurma("");
  }



}
