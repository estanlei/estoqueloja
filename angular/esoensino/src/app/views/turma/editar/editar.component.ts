import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TurmaService } from '../turma.service';
import { Turma } from "../turma.class";
import { Alert } from 'selenium-webdriver';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-turma-editar',
  templateUrl: './editar.component.html'
})

export class TurmaEditarComponent implements OnInit {

  turmaForm: FormGroup;
  submitted: boolean;

  constructor( private srvTurma : TurmaService 
              ,private fb: FormBuilder
              ,private route : ActivatedRoute 
               ) {


  }

  ngOnInit() {
    
    this.turmaForm = this.fb.group({
          TUR_ID :  [null, Validators.required],
          TUR_NOME :  [null, Validators.required],
          CUR_ID :  [null],
          PER_ID :  [null, Validators.required],
          TUR_ANOLETIVO :  [null, Validators.required],
          TUR_ANOGRADE :  [null, Validators.required],
          TUR_DATINI :  [null, Validators.required],
          TUR_DATFIM : [null, Validators.required],
          TUR_QTDEALUNOS :  [null, Validators.required],
          TIP_TUR_ID :  [null, Validators.required],
          SAL_ID :  [null, Validators.required],
          EMP_ID :  [null, Validators.required],
          SER_ID :  [null, Validators.required]
    });
    
    console.log(this.route.snapshot.params['id']);

    this.carregaTela(this.route.snapshot.params['id']);

  }
 
  carregaTela(id: any):void {
               
    this.srvTurma.getByID(id).subscribe(data =>  {
      this.turmaForm.setValue({
        TUR_ID: data.TUR_ID,
        TUR_NOME: data.TUR_NOME,
        CUR_ID: data.CUR_ID,
        PER_ID :  data.PER_ID,
        TUR_ANOLETIVO :  data.TUR_ANOLETIVO,
        TUR_ANOGRADE :  data.TUR_ANOGRADE,
        TUR_DATINI :  data.TUR_DATINI,
        TUR_DATFIM : data.TUR_DATFIM,
        TUR_QTDEALUNOS :  data.TUR_QTDEALUNOS,
        TIP_TUR_ID : data.TIP_TUR_ID,
        SAL_ID :  data.SAL_ID,
        EMP_ID :  data.EMP_ID,
        SER_ID : data.SER_ID
      });
      console.log('Dados :-)\n\n' + JSON.stringify(this.turmaForm.value, null, 4));

    });
     
  }

  salvar():void {
    if (this.turmaForm.invalid) {
      alert('inválido!! :-)\n\n' + JSON.stringify(this.turmaForm.value, null, 4));
      return;
     }
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
  setSalaID(selectID:any):void{
    
    this.turmaForm.value.SAL_ID = selectID
   
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

