import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TurmaService } from '../Turma.Service';
import { TurmaClass } from '../turma.class';
import { Alert } from 'selenium-webdriver';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-turma-editar',
  templateUrl: './editar.component.html'
})

export class TurmaEditarComponent implements OnInit {

  lista : TurmaClass[]

  turmaForm: FormGroup;
  submitted: boolean;

  constructor( private srvTurma : TurmaService 
              ,private fb: FormBuilder
              ,private route : ActivatedRoute 
               ) {

  }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    let item = this.srvTurma.getTurma(id)    
    this.carregaTela(item)
  
  }

  carregaTela(item : TurmaClass):void {
    this.turmaForm = this.fb.group({
                          TUR_ID :  [item.TUR_ID, Validators.required],
                          TUR_NOME :  [item.TUR_NOME, Validators.required],
                          CUR_ID :  [item.CUR_ID],
                          TUR_ANOSERIE :  [item.TUR_ANOSERIE, Validators.required],
                          TUR_PERIODO :  [item.TUR_PERIODO, Validators.required],
                          TUR_ANOLETIVO :  [item.TUR_ANOLETIVO, Validators.required],
                          TUR_ANOGRADE :  [item.TUR_ANOGRADE, Validators.required],
                          TUR_DATINI :  [item.TUR_DATINI, Validators.required],
                          TUR_DATFIM : [item.TUR_DATFIM, Validators.required],
                          TUR_QTDEALUNOS :  [item.TUR_QTDEALUNOS, Validators.required],
                          TIP_TUR_ID :  [item.TIP_TUR_ID, Validators.required],
                          ESC_ID : [item.ESC_ID, Validators.required],
                          SAL_ID :  [item.SAL_ID, Validators.required],
                          EMP_ID :  [item.EMP_ID, Validators.required]
         });
  }

  salvar():void {
    this.srvTurma.salvar(JSON.stringify(this.turmaForm.value))
  }
  excluir ():void {
    this.srvTurma.excluir(this.turmaForm.value.TUR_ID)
  }
  refresh():void{
    this.srvTurma.refresh(this.turmaForm.value.TUR_ID)
  }
  setCursoID(selectID:any):void{
    
    this.turmaForm.value.CUR_ID = selectID
   
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.turmaForm.invalid) {
        alert('inválido')
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.turmaForm.value, null, 4));
 }

}

