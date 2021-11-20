import { Recomendacao } from './recomendacao.model'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs'
import { map } from 'rxjs/operators'

//observable (Subject): Sofre eventos
//observer: Deseja ficar sabendo dos eventos
//design pattern: Observer

@Injectable ({
    providedIn: 'root'
})
export class RecomendacaoService{

    constructor (private httpClient: HttpClient){

    }

    private listaRecomendacoesAtualizada = new Subject <Recomendacao[]> ()
    private recomendacoes: Recomendacao[] = []
    
    // {_id: 1, nome: 'Joao', email: 'joao@email.com', fone: '123456'} => {id: 1, nome: 'Joao', email: 'joao@email.com', fone: '123456'}
    getRecomendacoes(): void{
        this.httpClient.get<{mensagem: string, recomendacoes: any}>('http://localhost:3000/api/recomendacoes')
        .pipe(map((dados) => {
            return dados.recomendacoes.map(recomendacao => {
                return {
                    id: recomendacao._id,
                    descricao: recomendacao.descricao,
                    createdAt: new Date(recomendacao.createdAt).toLocaleString()
                }
            })
        }))
        .subscribe(recomendacoes => {
            this.recomendacoes = recomendacoes
            this.listaRecomendacoesAtualizada.next([...this.recomendacoes])
        })
    }

    adicionarRecomendacao (descricao: string){
        const recomendacao: Recomendacao = {
            descricao
        }
        this.httpClient.post<{mensagem: string, id: string}>('http://localhost:3000/api/recomendacoes', recomendacao)
        .subscribe(dados => {
            console.log(dados.mensagem)
            recomendacao.id = dados.id
            this.recomendacoes.push(recomendacao)
            this.listaRecomendacoesAtualizada.next([...this.recomendacoes])
        })
    }

    removerRecomendacao (id: string){
        this.httpClient.delete(`http://localhost:3000/api/recomendacoes/${id}`)
        .subscribe(
            () =>{
                this.recomendacoes = this.recomendacoes.filter(rec => rec.id !== id)
                this.listaRecomendacoesAtualizada.next([...this.recomendacoes])
            }
        )
        alert(`http://localhost:3000/api/recomendacoes/${id}`)
    }

    getListaDeRecomendacoesAtualizadaObservable(){
        return this.listaRecomendacoesAtualizada.asObservable()
    }
}