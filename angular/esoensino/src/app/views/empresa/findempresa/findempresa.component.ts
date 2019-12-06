import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith} from 'rxjs/operators';
import { EmpresaService } from '../empresa.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from '../empresa.class';
import { Filtro } from 'src/app/model/filtro.class';

@Component({
  selector: 'app-findempresa',
  templateUrl: './findempresa.component.html'
})
export class FindempresaComponent implements OnInit {

  filtros : Filtro;
  lstempresa : Empresa[];
  emp : Empresa;
  frmCtrlEmpresa = new FormControl()
  filteredOptions: Observable<Empresa[]>
  @Input() empID  : any
  @Output() setID = new EventEmitter()
  
  constructor(private srvServico : EmpresaService) {

  }
  ngOnInit() {
  
    this.frmCtrlEmpresa.setValue(this.getByID(this.empID));

    this.filteredOptions = this.frmCtrlEmpresa.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this.getLista(name) : this.getLista('') )
    );

  }

  private getLista(value: string): Empresa[] {
    this.filtros.EMP_RAZAO_SOCIAL = value;
    this.srvServico.getLista(this.filtros).subscribe(data => this.lstempresa = data);
    return this.lstempresa;
  }
  private getByID(value: number): Empresa{
    this.srvServico.getByID(value).subscribe(data => this.emp = data);
    return  this.emp
 }

 
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
     this.setID.emit(event.option.value.EMP_ID)
  }
  displayFn(item?: Empresa): String | undefined {
    return item ? item.EMP_RAZAO_SOCIAL : undefined;
  }

}
