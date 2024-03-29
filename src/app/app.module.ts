import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './componentes/card/card.component';
import { BarraMenuComponent } from './componentes/barra-menu/barra-menu.component';
import { CardLabelComponent } from './componentes/card/card-label/card-label.component';
import { CardPrecoComponent } from './componentes/card/card-preco/card-preco.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    BarraMenuComponent,
    CardLabelComponent,
    CardPrecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
