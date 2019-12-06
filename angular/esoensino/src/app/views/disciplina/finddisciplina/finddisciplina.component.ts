import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith} from 'rxjs/operators';
import { DisciplinaService } from '../disciplina.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Disciplina } from '../disciplina.class';

@Component({
  selector: 'app-finddisciplina',
  templateUrl: './finddisciplina.component.html'
})
export class FinddisciplinaComponent implements OnInit {

  frmCtrldisciplina = new FormControl()
  filteredOptions: Observable<Disciplina[]>
  @Input() disID  : any
  @Output() setID = new EventEmitter()
  
  constructor(private srvServico : DisciplinaService) {

  }
  ngOnInit() {
  
    this.frmCtrldisciplina.setValue(this.getByID(this.disID));

    this.filteredOptions = this.frmCtrldisciplina.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this.getLista(name) : this.getLista('') )
    );

  }

  private getLista(value: string): Disciplina[] {
     return  this.srvServico.getLista(value);
  }
  private getByID(value: number): Disciplina{
    return  this.srvServico.getByID(value);
 }

 
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
     this.setID.emit(event.option.value.PRO_ID)
  }
  displayFn(item?: Disciplina): String | undefined {
    return item ? item.DIS_NOME : undefined;
  }

}
