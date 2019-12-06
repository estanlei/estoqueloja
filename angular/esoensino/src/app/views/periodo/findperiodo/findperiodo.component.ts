 
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith} from 'rxjs/operators';
import { PeriodoService } from '../periodo.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Periodo } from '../periodo.class';

@Component({
  selector: 'app-findPeriodo',
  templateUrl: './findperiodo.component.html'
})
export class FindperiodoComponent implements OnInit {

  frmCtrlPeriodo = new FormControl()
  filteredOptions: Observable<Periodo[]>
  @Input() perID  : any
  @Output() setID = new EventEmitter()
  
  constructor(private srvServico : PeriodoService) {
    this.frmCtrlPeriodo.setValue(this.getByID(this.perID));

    this.filteredOptions = this.frmCtrlPeriodo.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this.getLista(name) : this.getLista('') )
    );

  }
  ngOnInit() {
  
  
  }

  private getLista(value: string): Periodo[] {
     return  this.srvServico.getLista(value);
  }
  private getByID(value: number): Periodo{
    return  this.srvServico.getByID(value);
 }

 
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
     this.setID.emit(event.option.value.PER_ID)
  }
  displayFn(item?: Periodo): String | undefined {
    return item ? item.PER_DESCRICAO : undefined;
  }

}
