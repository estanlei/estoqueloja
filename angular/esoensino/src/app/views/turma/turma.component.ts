import { Component, OnInit } from '@angular/core';
import { Filtro } from 'src/app/model/filtro.class';
import { TurmaService } from './turma.service';
import { Turma } from "./turma.class";


@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html'
})
export class TurmaComponent implements OnInit {

  lstturma : Turma[];


  constructor(private srvTurma : TurmaService ) {
   
   }

  ngOnInit() {
   
  }

  listar(param:Filtro) {
    
      this.srvTurma.getLista(param).subscribe((data: Turma[]) => {
      this.lstturma = data;

    });
    
  }
  

}
