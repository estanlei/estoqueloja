import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoClass } from 'src/app/views/curso/curso.class';
import { FormControl } from '@angular/forms';
import { map, startWith} from 'rxjs/operators';
import { CursoService } from '../curso.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-findcurso',
  templateUrl: './findcurso.component.html'
})
export class FindcursoComponent implements OnInit {

  frmCtrl = new FormControl()
  filteredOptions: Observable<CursoClass[]>
  @Input() curID  : any
  @Output() setID = new EventEmitter()
  
  constructor(private srvServico : CursoService) {

  }
  ngOnInit() {
  
    this.frmCtrl.setValue(this.getCursoByID(this.curID));

    this.filteredOptions = this.frmCtrl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this.getCursos(name) : this.getCursos('') )
    );

  }

  private getCursos(value: string): CursoClass[] {
     return  this.srvServico.getListaCursos(value);
  }
  private getCursoByID(value: number): CursoClass{
    return  this.srvServico.geCurso(value);
 }

 
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
     this.setID.emit(event.option.value.CUR_ID)
  }
  displayFn(item?: CursoClass): String | undefined {
 //   alert(JSON.stringify(item, null, 4));
    return item ? item.CUR_NOME : undefined;
  }
  
}
