import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolaComponent } from './views/escola/escola.component';
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
import { FiltrosService } from './service/filtros.service';
import { FiltropesquisaComponent } from './componentes/filtropesquisa/filtropesquisa.component';
import { TurmaEditarComponent } from './views/turma/editar/editar.component';
import { ProfessorEditarComponent } from './views/professor/editar/editar.component';
import { FormheaderComponent } from './componentes/formheader/formheader.component';
import { CursoService } from './views/curso/curso.service';
import { FindcursoComponent } from './views/curso/findcurso/findcurso.component';
import { DialogViewComponent } from './componentes/dialog-view/dialog-view.component';
import { TurmaService } from './views/turma/Turma.Service';


 
@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    EscolaComponent,
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
      { path: 'escola', component: EscolaComponent },
      { path: 'turma', component: TurmaComponent },
      { path: 'turma/editar/:id', component: TurmaEditarComponent } 
    ])
  ],
  providers: [MenuService, FiltrosService, CursoService,TurmaService, HttpClient],
  bootstrap: [AppComponent],
  entryComponents:[DialogViewComponent]
  
})
export class AppModule { }
