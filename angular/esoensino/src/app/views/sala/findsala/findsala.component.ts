
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith} from 'rxjs/operators';
import { SalaService } from '../Sala.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Sala } from '../Sala.class';

@Component({
  selector: 'app-findsala',
  templateUrl: './findsala.component.html'
})
export class FindsalaComponent implements OnInit {

  frmCtrlSala = new FormControl()
  filteredOptions: Observable<Sala[]>
  @Input() salID  : any
  @Output() setID = new EventEmitter()
  
  constructor(private srvServico : SalaService) {
    this.frmCtrlSala.setValue(this.getByID(this.salID));

    this.filteredOptions = this.frmCtrlSala.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this.getLista(name) : this.getLista('') )
    );
  }
  ngOnInit() {
  


  }

  private getLista(value: string): Sala[] {
     return  this.srvServico.getLista(value);
  }
  private getByID(value: number): Sala{
    return  this.srvServico.getByID(value);
 }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
     this.setID.emit(event.option.value.SAL_ID)
  }
  displayFn(item?: Sala): String | undefined {
    return item ? item.SAL_DESCRICAO : undefined;
  }

}
