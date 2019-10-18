import { Component, OnInit,  EventEmitter, Output, Input } from '@angular/core';
import { FiltroClass } from 'src/app/model/filtro.class';
import { FiltrosService } from 'src/app/service/filtros.service';


@Component({
  selector: 'app-filtropesquisa',
  templateUrl: './filtropesquisa.component.html'
})
export class FiltropesquisaComponent implements OnInit {

  lstfiltro: FiltroClass []
  @Input() itens : any[]
  @Output() pesquisar = new EventEmitter<FiltroClass[]>()


  constructor(private filtroSrv : FiltrosService) { }

  ngOnInit() {
    this.lstfiltro = this.filtroSrv.getListaFiltros()
  }

  emitPesquisar(){
    this.pesquisar.emit(this.lstfiltro)
  }

  limparFiltros(){

    this.lstfiltro.forEach(element => { element.FIL_VALUE = null })

  }
  // -- Caso o a lista de filtros viesse de outro componente
  // emitPesquisar(item: FiltroClass[]){
  //  this.pesquisar.emit(item);
  // }
  step = 0

  setStep(index: number) {
       this.step  = index
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


}
