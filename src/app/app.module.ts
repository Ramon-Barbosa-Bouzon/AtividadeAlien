import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CentroComponent } from './centro/centro.component';
import { RedapeComponent } from './rodape/redape.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CentroComponent,
    RedapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
