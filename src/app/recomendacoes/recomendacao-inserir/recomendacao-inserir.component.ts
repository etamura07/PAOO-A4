import { ActivatedRoute, ParamMap } from "@angular/router";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Recomendacao } from "../recomendacao.model";
import { RecomendacaoService } from "../recomendacao.service";

@Component({
    selector: 'app-recomendacao-inserir',
    templateUrl: './recomendacao-inserir.component.html',
    styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent implements OnInit {

    constructor(
        private recomendacaoService: RecomendacaoService,
        private route: ActivatedRoute,
    ) {

    }

    private modo: string = 'criar'
    private idRecomendacao: string;
    public recomendacao: Recomendacao;

    ngOnInit() {
        this.modo = 'criar'
        this.idRecomendacao = null
    }

    onSalvarRecomendacao(form: NgForm) {
        if (form.invalid) return
        if (this.modo === 'criar') {
            this.recomendacaoService.adicionarRecomendacao(
                form.value.descricao,
            )
        }
        form.resetForm()
    }

}

