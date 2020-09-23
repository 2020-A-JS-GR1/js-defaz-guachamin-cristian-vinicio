import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicialComponent } from './rutasBS/ruta-inicial/ruta-inicial.component';
import { RutaCrearUsuarioComponent } from './rutasBS/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaLoginUsuarioComponent } from './rutasBS/ruta-login-usuario/ruta-login-usuario.component';
import { FormLoginUsuarioComponent } from './componentesBS/form-login-usuario/form-login-usuario.component';
import { FormCrearUsuarioComponent } from './componentesBS/form-crear-usuario/form-crear-usuario.component';
import {FormsModule} from "@angular/forms";
import { RutaOpcionesPrincipalesComponent } from './rutasBS/ruta-opciones-principales/ruta-opciones-principales.component';
import { RutaListaServiciosComponent } from './rutasBS/ruta-lista-servicios/ruta-lista-servicios.component';
import { RutaListaAnunciosComponent } from './rutasBS/ruta-lista-anuncios/ruta-lista-anuncios.component';
import { NavbarPrincipalComponent } from './componentesBS/navbar-principal/navbar-principal.component';
import { NavbarInicialComponent } from './componentesBS/navbar-inicial/navbar-inicial.component';
import { RutaAnunciosComponent } from './rutasBS/ruta-anuncios/ruta-anuncios.component';
import { TarjetaServicioComponent } from './componentesBS/tarjeta-servicio/tarjeta-servicio.component';
import { TarjetaAnuncioServComponent } from './componentesBS/tarjeta-anuncio-serv/tarjeta-anuncio-serv.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicialComponent,
    RutaCrearUsuarioComponent,
    RutaLoginUsuarioComponent,
    FormLoginUsuarioComponent,
    FormCrearUsuarioComponent,
    RutaOpcionesPrincipalesComponent,
    RutaListaServiciosComponent,
    RutaListaAnunciosComponent,
    NavbarPrincipalComponent,
    NavbarInicialComponent,
    RutaAnunciosComponent,
    TarjetaServicioComponent,
    TarjetaAnuncioServComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
