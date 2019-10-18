import { Component, OnInit,  EventEmitter, Output, Input } from '@angular/core';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-formheader',
  templateUrl: './formheader.component.html'
})
export class FormheaderComponent implements OnInit {
  @Input() itens : any[]
  @Output() salvar = new EventEmitter()
  @Output() excluir = new EventEmitter()
  @Output() refresh = new EventEmitter()
  
  tipo = 0;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogViewComponent, {
      panelClass: 'my-dialog',
      data: {tipo: this.tipo, header: "", mensagem :""}
    });

    dialogRef.afterClosed().subscribe((result: any) => {

        if (result==true){
            switch (this.tipo) {
              case 1:
                this.salvar.emit(this.itens)
                break;
              case 2:
                this.excluir.emit(this.itens)
                break;
              case 3:
                this.refresh.emit(this.itens)
                break;
            }
        }

    });
  }
  emitSalvar(itens: any){
    this.tipo = 1
    this.openDialog();

  }
  emitExcluir(itens: any){
    this.tipo = 2
    this.openDialog();
  }
  emitRefresh(itens: any){
    this.tipo = 3
    this.openDialog();
  }

}
