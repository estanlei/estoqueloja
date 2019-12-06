import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-incluir-usuario',
  templateUrl: './incluir-usuario.component.html'
})
export class IncluirUsuarioComponent implements OnInit {
  
  frmUsuario: FormGroup
  admin : boolean;
  constructor(private srvUsuario: UsuarioService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.admin = sessionStorage.getItem('admin')=="true";

    this.frmUsuario = this.fb.group({
      USU_LOGIN : [null, Validators.required],
      USU_NOME : [null, Validators.required],
      USU_SENHA :[null, Validators.required],
      USU_ADMIN : [null]
    });
 
  }
  
  salvar():void {

    if (this.frmUsuario.invalid) {
      alert('Dados inválidos, verifique !! \n\n' + JSON.stringify(this.frmUsuario.value, null, 4));
      return;
     }

     this.srvUsuario.incluir(this.frmUsuario.value);


     alert('Usuário incluído com sucesso !!');

     
  }

 
}
