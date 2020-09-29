import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RutaInicialComponent} from './rutasBS/ruta-inicial/ruta-inicial.component';
import {RutaCrearUsuarioComponent} from './rutasBS/ruta-crear-usuario/ruta-crear-usuario.component';
import {FormLoginUsuarioComponent} from './componentesBS/form-login-usuario/form-login-usuario.component';
import {FormCrearUsuarioComponent} from './componentesBS/form-crear-usuario/form-crear-usuario.component';
import {FormsModule} from "@angular/forms";
import {RutaOpcionesPrincipalesComponent} from './rutasBS/ruta-opciones-principales/ruta-opciones-principales.component';
import {RutaListaServiciosComponent} from './rutasBS/ruta-lista-servicios/ruta-lista-servicios.component';
import {RutaListaAnunciosCliComponent} from './rutasBS/ruta-lista-anuncios-cli/ruta-lista-anuncios-cli.component';
import {NavbarPrincipalComponent} from './componentesBS/navbar-principal/navbar-principal.component';
import {NavbarInicialComponent} from './componentesBS/navbar-inicial/navbar-inicial.component';
import {RutaClientes} from './rutasBS/ruta-clientes/ruta-clientes.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ServiciosBSService} from "./serviciosBS/http/serviciosBS.service";
import {HttpClientModule} from "@angular/common/http";
import {AnunciosBSService} from "./serviciosBS/http/anunciosBS.service";
import {ModalPerfilAnuncianteComponent} from './componentesBS/modal-perfil-anunciante/modal-perfil-anunciante.component';
import { RutaSolictudesCliComponent } from './rutasBS/ruta-solictudes-cli/ruta-solictudes-cli.component';
import {SolicitudBSService} from "./serviciosBS/http/solicitudBS.service";
import {ModalReseniaComponent} from "./componentesBS/modal-resenia/modal-resenia.component";
import { RutaCrearContactoComponent } from './rutasBS/ruta-crear-contacto/ruta-crear-contacto.component';
import { RutaAnunciosComponent } from './rutasBS/ruta-anuncios/ruta-anuncios.component';
import { NavbarModuloAnunciosComponent } from './componentesBS/navbar-modulo-anuncios/navbar-modulo-anuncios.component';
import { FormContactoComponent } from './componentesBS/form-contacto/form-contacto.component';
import { FormNuevoAnuncioComponent } from './componentesBS/form-nuevo-anuncio/form-nuevo-anuncio.component';
import { RutaCrearAnuncioComponent } from './rutasBS/ruta-crear-anuncio/ruta-crear-anuncio.component';
import { RutaGestionAnuncios } from './rutasBS/ruta-gestion-anuncios/ruta-gestion-anuncios.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicialComponent,
    RutaCrearUsuarioComponent,
    FormLoginUsuarioComponent,
    FormCrearUsuarioComponent,
    RutaOpcionesPrincipalesComponent,
    RutaListaServiciosComponent,
    RutaListaAnunciosCliComponent,
    NavbarPrincipalComponent,
    NavbarInicialComponent,
    RutaClientes,
    ModalPerfilAnuncianteComponent,
    RutaSolictudesCliComponent,
    ModalReseniaComponent,
    RutaCrearContactoComponent,
    RutaAnunciosComponent,
    NavbarModuloAnunciosComponent,
    FormContactoComponent,
    FormNuevoAnuncioComponent,
    RutaCrearAnuncioComponent,
    RutaGestionAnuncios,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    ServiciosBSService,
    AnunciosBSService,
    SolicitudBSService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
