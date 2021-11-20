import { Component } from '@angular/core';
import { Recomendacao } from './recomendacoes/recomendacao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  recomendacoes: Recomendacao[] = []
  onRecomendacaoAdicionada (recomendacao){
    // console.log('Adicionando o cliente: ' + JSON.stringify(cliente))
    this.recomendacoes = [...this.recomendacoes, recomendacao]
  }
}
