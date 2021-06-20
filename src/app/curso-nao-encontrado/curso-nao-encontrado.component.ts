import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-nao-encontrado',
  templateUrl: './curso-nao-encontrado.component.html',
  styleUrls: ['./curso-nao-encontrado.component.css']
})
export class CursoNaoEncontradoComponent implements OnInit {

  id!: number;
  inscricao: Subscription = new Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inscricao = this.route.
       params.subscribe((params:any)=>{
      this.id = params['id'];
    });
  }

}
