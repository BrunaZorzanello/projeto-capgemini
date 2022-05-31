import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule} from "@angular/material/snack-bar";
import { CarrinhoModule } from './carrinho/carrinho.module';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontradoComponent,
    BarraPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    CarrinhoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
