import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./servicios/usuario.service";

@NgModule({
  declarations: [ // Componentes
    AppComponent,
    CartaPeliculaComponent
  ],
  imports: [ // Modulos que vamos a utilizar
    BrowserModule, // Importa las directivas ngFor y ngIf
    AppRoutingModule,
    HttpClientModule // Importa el HttpClient inyectado al servicio de Usuario

  ],
  providers: [ // Servicios
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

