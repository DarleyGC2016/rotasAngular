import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AlunosComponent } from './alunos/alunos.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AlunosComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
