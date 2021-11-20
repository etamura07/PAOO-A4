import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { RecomendacaoInserirComponent } from "./recomendacoes/recomendacao-inserir/recomendacao-inserir.component";
import { RecomendacaoListaComponent } from "./recomendacoes/recomendacao-lista/recomendacao-lista.component";

const routes: Routes = [
    //http://localhost:4200
    {path: '', component: RecomendacaoListaComponent},
    //http://localhost:4200/criar
    {path: 'criar', component: RecomendacaoInserirComponent},
    //http://localhost:4200/editar/123456
    //http://localhost:4200/editar/77887788
    //http://localhost:4200/editar/1
    //http://localhost:4200/editar/2
    {path: 'editar/:idCliente', component: RecomendacaoInserirComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutinModule{

}