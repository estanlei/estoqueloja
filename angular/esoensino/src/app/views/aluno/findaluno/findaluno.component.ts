import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from 'src/app/views/Aluno/aluno.class';
import { FormControl } from '@angular/forms';
import { map, startWith} from 'rxjs/operators';
import { AlunoService } from '../aluno.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-findaluno',
  templateUrl: './findaluno.component.html'
})
export class FindalunoComponent implements OnInit {

  lstaluno : Aluno[];
  alu : Aluno;
  frmCtrl = new FormControl()
  filteredOptions: Observable<Aluno[]>
  @Input() curID  : any
  @Output() setID = new EventEmitter()
  
  constructor(private srvServico : AlunoService) {

    this.frmCtrl.setValue(this.getByID(this.curID));

    this.filteredOptions = this.frmCtrl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this.getLista(name) : this.getLista('') )
    );

  }
  ngOnInit() {
  
  }

  private getLista(value: string): Aluno[] {
     this.srvServico.getLista(value).subscribe(data => this.lstaluno = data);
     return this.lstaluno;
  }
  private getByID(value: number): Aluno{

    this.srvServico.getByID(value).subscribe(data => this.alu = data);
    return this.alu;
 }
 
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
     this.setID.emit(event.option.value.ALU_ID)
  }
  displayFn(item?: Aluno): String | undefined {
    return item ? item.ALU_NOME : undefined;
  }


}
