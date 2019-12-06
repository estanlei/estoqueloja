import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../service/usuario-service';
import { usuario } from '../usuario/usuario.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  frmLogin: FormGroup
  dados: usuario;

  constructor(private fb: FormBuilder,
    private srvUsuario: UsuarioService,
    private router: Router) { }

  ngOnInit() {
    this.frmLogin = this.fb.group({
      USU_LOGIN: [null, Validators.required],
      USU_SENHA: [null, Validators.required]
    });
  }

  autenticarUsuario() {

    if (this.frmLogin.invalid) {
      alert('Login ou senha inválida. Verifique!! ');
      return;
    }

    this.srvUsuario.realizarLogin(this.frmLogin.value.USU_LOGIN, this.frmLogin.value.USU_SENHA)
      .subscribe((data: usuario) => {
        this.dados = data
        console.log(JSON.stringify(this.dados));

        if (this.dados==null) {
          alert('Login ou senha inválida. Verifique!! ');
          return;
        }

        sessionStorage.setItem('login', this.dados.USU_LOGIN);

        if (this.dados.USU_ADMIN)
          sessionStorage.setItem('admin', 'true');
        else
          sessionStorage.setItem('admin', 'false');

        console.log(sessionStorage);

        this.router.navigate(['/home']);
      });
  

  }




}
