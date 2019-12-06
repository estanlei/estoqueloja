import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/service/produto-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-incluir-produto',
  templateUrl: './incluir-produto.component.html'
})
export class IncluirProdutoComponent implements OnInit {

  frmProduto: FormGroup

  constructor(private srvproduto: ProdutoService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
 
    this.frmProduto = this.fb.group({
      PRO_ID : [null],
      PRO_DESCRICAO : [null, Validators.required],
      PRO_VLR_UN :[null, Validators.required],
      PRO_MARGEM_LUCRO : [null, Validators.required],
      PRO_QTD_ESTOQUE : [null, Validators.required]
    });

  }
  
  salvar():void {

    if (this.frmProduto.invalid) {
      alert('Dados inválidos, verifique !! \n\n' + JSON.stringify(this.frmProduto.value, null, 4));
      return;
     }

     this.srvproduto.incluir(this.frmProduto.value);
  
     alert('Produto incluído com sucesso !!');
   
  }



}
