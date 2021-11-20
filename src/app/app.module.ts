import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar'

import { AppRoutinModule } from './app-routing.module';

import { AppComponent } from './app.component';
import  { RecomendacaoInserirComponent } from './recomendacoes/recomendacao-inserir/recomendacao-inserir.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RecomendacaoListaComponent } from './recomendacoes/recomendacao-lista/recomendacao-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    RecomendacaoInserirComponent,
    CabecalhoComponent,
    RecomendacaoListaComponent
  ],
  imports: [
    AppRoutinModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
