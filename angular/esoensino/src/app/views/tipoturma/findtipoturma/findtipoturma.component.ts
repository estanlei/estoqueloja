 
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith} from 'rxjs/operators';
import { TipoTurmaService } from '../tipoturma.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { TipoTurma } from '../tipoturma.class';

@Component({
  selector: 'app-findTipoTurma',
  templateUrl: './findTipoTurma.component.html'
})
export class FindtipoturmaComponent implements OnInit {
  lsttipoturma : TipoTurma[];
  tiptur : TipoTurma;
  frmCtrlTipoTurma = new FormControl()
  filteredOptions: Observable<TipoTurma[]>
  @Input() tturID  : any
  @Output() setID = new EventEmitter()
  
  constructor(private srvServico : TipoTurmaService) {
    this.frmCtrlTipoTurma.setValue(this.getByID(this.tturID));

    this.filteredOptions = this.frmCtrlTipoTurma.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this.getLista(name) : this.getLista('') )
    );

  }
  ngOnInit() {
  
  
  }

  private getLista(value: string){
    
      this.srvServico.getLista(value).subscribe(data => this.lsttipoturma = data);
      return this.lsttipoturma;
  }
  private getByID(value: number){
      this.srvServico.getByID(value).subscribe(data => this.tiptur = data);
      return this.tiptur;
 }

 
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
     this.setID.emit(event.option.value.PRO_ID)
  }
  displayFn(item?: TipoTurma): String | undefined {
    return item ? item.TIP_TUR_DESCRICAO : undefined;
  }

}
