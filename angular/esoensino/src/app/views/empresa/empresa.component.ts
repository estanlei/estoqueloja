import { Component, OnInit } from '@angular/core';
import { Filtro } from 'src/app/model/filtro.class';
import { EmpresaService } from './empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html'
})
export class EmpresaComponent implements OnInit {

  lstempresa : any[]

  constructor(private srvService : EmpresaService) {
   
   }

  ngOnInit() {
   
  }

  listar(param: Filtro) {
     this.srvService.getLista(param).subscribe(data => this.lstempresa = data);
  }
}
