import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html'
})
export class EditarUsuarioComponent implements OnInit {

  frmUsuario: FormGroup
  admin : boolean;

  constructor(private srvUsuario: UsuarioService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }
 
  ngOnInit() {

    this.frmUsuario = this.fb.group({
      USU_LOGIN : [null, Validators.required],
      USU_NOME : [null, Validators.required],
      USU_SENHA :[null, Validators.required],
      USU_ADMIN : [null]
    });

    this.admin = sessionStorage.getItem('admin')=="true";

    this.carregaDados(this.route.snapshot.params['login']);

  }
  carregaDados(id: any):void {
           
    

    this.srvUsuario.getByID(id).subscribe(data =>  {
      this.frmUsuario.setValue({
        USU_LOGIN: data.USU_LOGIN,
        USU_NOME: data.USU_NOME,
        USU_SENHA: data.USU_SENHA,
        USU_ADMIN :  data.USU_ADMIN 
      });
      console.log('Dados \n\n' + JSON.stringify(this.frmUsuario.value, null, 4));

    });
     
  }
  
  salvar():void {

    if (this.frmUsuario.invalid) {
      alert('Dados inválidos, verifique !!\n\n' + JSON.stringify(this.frmUsuario.value, null, 4));
      return;
     }

     this.srvUsuario.editar(this.frmUsuario.value);

     alert('Dados alterados com sucesso !!');

  }

}
