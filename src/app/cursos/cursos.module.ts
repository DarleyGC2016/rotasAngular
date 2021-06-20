import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        MatTableModule
    ],
    exports:[],
    declarations:[
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers:[CursosService]
})

export class CursosModule{}