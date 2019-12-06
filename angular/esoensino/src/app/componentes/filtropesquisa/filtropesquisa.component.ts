import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Filtro} from 'src/app/model/filtro.class';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-filtropesquisa',
  templateUrl: './filtropesquisa.component.html'
})
export class FiltropesquisaComponent implements OnInit {

  frmctrl: FormGroup;
  lstfiltro: Filtro[]
  @Output() pesquisar = new EventEmitter<Filtro[]>()


  constructor(private fb: FormBuilder) {
    this.frmctrl = this.fb.group({
      CUR_ID : new FormControl(""),
      TUR_NOME: new FormControl(""),
      TIP_TUR_ID : new FormControl(""),
      PER_ID : new FormControl("")
    });
  }

  ngOnInit() {

  }

  emitPesquisar() {
    this.pesquisar.emit(this.frmctrl.value)
  }

  limparFiltros() {

    //this.lstfiltro.forEach(element => { element.FIL_VALUE = null })

  }
  // -- Caso o a lista de filtros viesse de outro componente
  // emitPesquisar(item: FiltroClass[]){
  //  this.pesquisar.emit(item);
  // }
  step = 0

  setStep(index: number) {
    this.step = index
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  setPeriodoID(selectID:any):void{
  
    this.frmctrl.value.PER_ID = selectID;
   
  }
  setCursoID(selectID:any):void{
  
    this.frmctrl.value.CUR_ID = selectID;
   
  }
  setTipoTurmaID(selectID:any):void{
  
    this.frmctrl.value.TIP_TUR_ID = selectID;
   
  }
  

}
