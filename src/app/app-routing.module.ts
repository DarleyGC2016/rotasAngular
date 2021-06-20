import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'cursos', component: CursosComponent},
  {path:'curso/:id', component: CursoDetalheComponent},
  {path:'naoEncontrado/:id', component: CursoNaoEncontradoComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent}
];
/**
 * na versão 2 e 4 usava essa constante para criar as rotas
 * export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
 */


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
