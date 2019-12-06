
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith} from 'rxjs/operators';
import { TurmaService } from '../turma.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Turma } from "../turma.class";
import { Filtro } from 'src/app/model/filtro.class';

@Component({
  selector: 'app-findturma',
  templateUrl: './findturma.component.html'
})
export class FindturmaComponent implements OnInit {
  filtros : Filtro
  frmCtrlturma = new FormControl()
  filteredOptions: Observable<Turma[]>
  @Input() disID  : any
  @Output() setID = new EventEmitter()
  
  constructor(private srvServico : TurmaService) {
    this.frmCtrlturma.setValue(this.getByID(this.disID));

    this.filteredOptions = this.frmCtrlturma.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this.getLista(name) : this.getLista('') )
    );

  }
  ngOnInit() { 
  
  }
  

  private getLista(value: string): any {
     this.filtros.TUR_NOME = value;
     return  this.srvServico.getLista(this.filtros);
  }
  private getByID(value: number): any {
    return  this.srvServico.getByID(value);
 }

 
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
     this.setID.emit(event.option.value.PRO_ID)
  }
  displayFn(item?: Turma): String | undefined {
    return item ? item.TUR_NOME : undefined;
  }

}
