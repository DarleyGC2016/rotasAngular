import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[] = [];
  pagina!: number;
  inscricao: Subscription = new Subscription;
  displayedColumns: string[] = [ 'nome'];

  constructor(private cursosService:CursosService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    console.log(this.cursos);
    this.inscricao = this.route.queryParams.subscribe(
      (query:any) => {
        this.pagina = query['pagina'];
      }
    );
  }
  proximaPagina(){
    //this.pagina++;
    //page: 

    this.router.navigate(['/cursos'],{queryParams:{'pagina':++this.pagina}})
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
