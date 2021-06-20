import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';





//import { Subscription } from 'rxjs/RX' era usado no angular 4x;
@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  // na versão 4,na precisa inicializar uma variavel
   // na versão 4,na precisa inicializar uma variavel
  id!: number;
   curso:any;

  inscricao: Subscription = new Subscription;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService) {
   // this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params:any)=>{
        this.id = params['id'];

        this.curso = this.cursosService.getCurso(this.id);

        if(this.curso == null){
          this.router.navigate(['/naoEncontrado',this.id])
        }
      }
    );
  }
   ngOnDestroy(){
     this.inscricao.unsubscribe();
   }
}
