import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './views/empresa/empresa.component';
import { TurmaComponent } from './views/turma/turma.component';
import { CursoComponent } from './views/curso/curso.component';
import { DisciplinaComponent } from './views/disciplina/disciplina.component';
import { MenuComponent } from './views/menu/menu.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MenuService} from './service/menu.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AlunoComponent } from './views/aluno/aluno.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.appmodule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfessorComponent } from './views/professor/professor.component';
import { PaginadorComponent } from './componentes/paginador/paginador.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { FiltropesquisaComponent } from './componentes/filtropesquisa/filtropesquisa.component';
import { TurmaEditarComponent } from './views/turma/editar/editar.component';
import { ProfessorEditarComponent } from './views/professor/editar/editar.component';
import { FormheaderComponent } from './componentes/formheader/formheader.component';
import { CursoService } from './views/curso/curso.service';
import { FindcursoComponent } from './views/curso/findcurso/findcurso.component';
import { DialogViewComponent } from './componentes/dialog-view/dialog-view.component';
import { FindsalaComponent } from './views/sala/findsala/findsala.component';
import { FindperiodoComponent } from './views/periodo/findperiodo/findperiodo.component';
import { FindturmaComponent } from './views/turma/findturma/findturma.component';
import { FindprofessorComponent } from './views/professor/findprofessor/findprofessor.component';
import { FinddisciplinaComponent } from './views/disciplina/finddisciplina/finddisciplina.component';
import { FindtipoturmaComponent } from './views/tipoturma/findtipoturma/findtipoturma.component';
import { FindempresaComponent } from './views/empresa/findempresa/findempresa.component';
import { TurmaService } from './views/turma/turma.service';
import { DisciplinaService } from './views/disciplina/disciplina.service';
import { ProfessorService } from './views/professor/professor.service';
import { SalaService } from './views/sala/Sala.service';
import { PeriodoService } from './views/periodo/periodo.service';
import { TipoTurmaService } from './views/tipoturma/tipoturma.service';
import { EmpresaService } from './views/empresa/empresa.service';
import { FindalunoComponent } from './views/aluno/findaluno/findaluno.component';


 
@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    EmpresaComponent,
    TurmaComponent,
    CursoComponent,
    DisciplinaComponent,
    MenuComponent,
    HomeComponent,
    DashboardComponent,
    AlunoComponent,
    ProfessorComponent,
    PaginadorComponent,
    FiltropesquisaComponent,
    TurmaEditarComponent,
    ProfessorEditarComponent,
    FormheaderComponent,
    FindcursoComponent,
    DialogViewComponent,
    FindsalaComponent,
    FindperiodoComponent,
    FindturmaComponent,
    FindprofessorComponent,
    FinddisciplinaComponent,
    FindtipoturmaComponent,
    FindempresaComponent,
    FindalunoComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'aluno', component: AlunoComponent },
      { path: 'curso', component: CursoComponent },
      { path: 'disciplina', component: DisciplinaComponent },
      { path: 'empresa', component: EmpresaComponent },
      { path: 'professor', component: ProfessorComponent },
      { path: 'professor/editar/:id', component: ProfessorEditarComponent },
      { path: 'turma', component: TurmaComponent },
      { path: 'turma/editar/:id', component: TurmaEditarComponent } 
    ])
  ],
  providers: [MenuService, CursoService,TurmaService,DisciplinaService,
              ProfessorService, SalaService, PeriodoService, TipoTurmaService,
              EmpresaService, HttpClient],
  bootstrap: [AppComponent],
  entryComponents:[DialogViewComponent]
  
})
export class AppModule { }
