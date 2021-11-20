import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Recomendacao } from '../recomendacao.model';
import { RecomendacaoService } from '../recomendacao.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'recomendacao-cliente-lista',
  templateUrl: './recomendacao-lista.component.html',
  styleUrls: ['./recomendacao-lista.component.css']
})
export class RecomendacaoListaComponent 
      implements OnInit, OnDestroy {

  recomendacoes: Recomendacao[] = []
  private recomendacaoSubscription: Subscription


  constructor(private recomendacaoService: RecomendacaoService) {

  }

  ngOnInit(): void {
    this.recomendacaoService.getRecomendacoes()
    this.recomendacaoSubscription = this.recomendacaoService.getListaDeRecomendacoesAtualizadaObservable()
    .subscribe((recomendacoes: Recomendacao[]) => {
      this.recomendacoes = recomendacoes.reverse();
    })
  }

  ngOnDestroy(): void{
    this.recomendacaoSubscription.unsubscribe()
  }

}
