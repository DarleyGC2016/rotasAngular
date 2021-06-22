import { CursosRoutingModule } from './cursos.routing.module';
import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

import { CommonModule } from '@angular/common';

import { MatTableModule} from '@angular/material/table';
import { MatButtonModule} from '@angular/material/button';

@NgModule({
    imports:[
        CommonModule,
        CursosRoutingModule,
        MatTableModule,
        MatButtonModule
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