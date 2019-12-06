import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto-service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html'
})
export class EditarProdutoComponent implements OnInit {

  frmProduto: FormGroup

  constructor(private srvProduto: ProdutoService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.frmProduto = this.fb.group({
      PRO_ID : [null, Validators.required],
      PRO_DESCRICAO : [null, Validators.required],
      PRO_VLR_UN :[null, Validators.required],
      PRO_MARGEM_LUCRO : [null, Validators.required],
      PRO_QTD_ESTOQUE : [null, Validators.required]
    });

    this.carregaDados(this.route.snapshot.params['id']);

  }
  carregaDados(id: any):void {
               
    this.srvProduto.getByID(id).subscribe(data =>  {
      this.frmProduto.setValue({
      	PRO_ID : data.PRO_ID,
        PRO_DESCRICAO : data.PRO_DESCRICAO,
        PRO_VLR_UN : data.PRO_VLR_UN,
        PRO_MARGEM_LUCRO : data.PRO_MARGEM_LUCRO,
        PRO_QTD_ESTOQUE : data.PRO_QTD_ESTOQUE
      });
      
      console.log('Dados \n\n' + JSON.stringify(this.frmProduto.value, null, 4));

    });
     
  }
  
  salvar():void {

    if (this.frmProduto.invalid) {
      alert('Dados inválidos, verifique !! \n\n' + JSON.stringify(this.frmProduto.value, null, 4));
      return;
     }

     this.srvProduto.editar(this.frmProduto.value);

     alert('Dados alterados com sucesso !!');
 
  }


}
