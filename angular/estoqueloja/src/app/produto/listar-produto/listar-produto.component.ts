import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { produto } from '../produto.class';
import { ProdutoService } from 'src/app/service/produto-service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html'
})
export class ListarProdutoComponent implements OnInit {

  frmProduto: FormGroup
  lstproduto: produto[];
  admin: boolean;

  constructor(private srvProduto: ProdutoService,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.admin = sessionStorage.getItem('admin') == "true";

    this.frmProduto = this.fb.group({
      PRO_ID: [null],
      PRO_DESCRICAO: [null],
    });

    this.listar();
  }

  listar() {

    this.srvProduto.getLista(this.frmProduto.value.PRO_ID,
      this.frmProduto.value.PRO_DESCRICAO).subscribe((data: produto[]) => {
        this.lstproduto = data;

      });

  }
  excluir(item: produto) {
    this.srvProduto.excluir(item);
  }

}
