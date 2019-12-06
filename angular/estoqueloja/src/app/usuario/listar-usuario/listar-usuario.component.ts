import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario-service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { usuario } from '../usuario.class';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html'
})
export class ListarUsuarioComponent implements OnInit {

  frmusuario: FormGroup
  lstusuario: usuario[];
  admin: boolean;

  constructor(private srvUsuario: UsuarioService,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.admin = sessionStorage.getItem('admin') == "true";

    this.listar("");
  }

  listar(nome: string) {

    this.srvUsuario.getLista(nome).subscribe((data: usuario[]) => {
      this.lstusuario = data;

    });
  }

  excluir(item: usuario) {

    this.srvUsuario.excluir(item);
  }

}
