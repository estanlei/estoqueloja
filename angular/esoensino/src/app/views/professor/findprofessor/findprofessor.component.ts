
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith} from 'rxjs/operators';
import { ProfessorService } from '../professor.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Professor } from '../professor.class';

@Component({
  selector: 'app-findprofessor',
  templateUrl: './findprofessor.component.html'
})
export class FindprofessorComponent implements OnInit {

  frmCtrlProfessor = new FormControl()
  filteredOptions: Observable<Professor[]>
  @Input() proID  : any
  @Output() setID = new EventEmitter()
  
  constructor(private srvServico : ProfessorService) {
    this.frmCtrlProfessor.setValue(this.getByID(this.proID));

    this.filteredOptions = this.frmCtrlProfessor.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this.getLista(name) : this.getLista('') )
    );
  }
  ngOnInit() {
  
 
  }

  private getLista(value: string): Professor[] {
     return  this.srvServico.getLista(value);
  }
  private getByID(value: number): Professor{
    return  this.srvServico.getByID(value);
 }

 
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
     this.setID.emit(event.option.value.PRO_ID)
  }
  displayFn(item?: Professor): String | undefined {
    return item ? item.PRO_NOME : undefined;
  }

}
