import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { IncluirUsuarioComponent } from './usuario/incluir-usuario/incluir-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { ListarLogComponent } from './log/listar-log/listar-log.component';
import { EditarProdutoComponent } from './produto/editar-produto/editar-produto.component';
import { IncluirProdutoComponent } from './produto/incluir-produto/incluir-produto.component';
import { ListarProdutoComponent } from './produto/listar-produto/listar-produto.component';
import { UsuarioService } from './service/usuario-service';
import { ProdutoService } from './service/produto-service';
import { LogService } from './service/log-service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarUsuarioComponent,
    IncluirUsuarioComponent,
    ListarUsuarioComponent,
    ListarLogComponent,
    EditarProdutoComponent,
    IncluirProdutoComponent,
    ListarProdutoComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'usuario', component: ListarUsuarioComponent },
      { path: 'produto', component: ListarProdutoComponent },
      { path: 'log', component: ListarLogComponent },
      { path: 'usuario/incluir-usuario', component: IncluirUsuarioComponent },
      { path: 'produto/incluir-produto', component: IncluirProdutoComponent },
      { path: 'usuario/editar-usuario/:login', component: EditarUsuarioComponent },
      { path: 'produto/editar-produto/:id', component: EditarProdutoComponent }
    ])
  ],
  providers: [UsuarioService,ProdutoService,LogService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
