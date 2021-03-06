import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicialComponent} from "./rutasBS/ruta-inicial/ruta-inicial.component";
import {RutaOpcionesPrincipalesComponent} from "./rutasBS/ruta-opciones-principales/ruta-opciones-principales.component";
import {RutaListaAnunciosCliComponent} from "./rutasBS/ruta-lista-anuncios-cli/ruta-lista-anuncios-cli.component";
import {RutaClientes} from "./rutasBS/ruta-clientes/ruta-clientes.component";
import {RutaListaServiciosComponent} from "./rutasBS/ruta-lista-servicios/ruta-lista-servicios.component";
import {RutaSolictudesCliComponent} from "./rutasBS/ruta-solictudes-cli/ruta-solictudes-cli.component";
import {RutaAnunciosComponent} from "./rutasBS/ruta-anuncios/ruta-anuncios.component";
import {RutaCrearContactoComponent} from "./rutasBS/ruta-crear-contacto/ruta-crear-contacto.component";
import {RutaCrearAnuncioComponent} from "./rutasBS/ruta-crear-anuncio/ruta-crear-anuncio.component";
import {RutaGestionAnuncios} from "./rutasBS/ruta-gestion-anuncios/ruta-gestion-anuncios.component";
import {RutaCrearUsuarioBSComponent} from "./rutasBS/ruta-crear-usuario-bs/ruta-crear-usuario-bs.component";
import {RutaLoginUsuarioBSComponent} from "./rutasBS/ruta-login-usuario-bs/ruta-login-usuario-bs.component";
import {EstaLogueadoBSGuard} from "./serviciosBS/guard/esta-logueado-BS.guard";
import {RutaEditarContactoComponent} from "./rutasBS/ruta-editar-contacto/ruta-editar-contacto.component";
import {RutaEditarAnuncioComponent} from "./rutasBS/ruta-editar-anuncio/ruta-editar-anuncio.component";

const routes: Routes = [
  {
    component: RutaInicialComponent,
    path:'inicio',
  },
  {
    component: RutaLoginUsuarioBSComponent,
    path: 'login'
  },
  {
    component: RutaCrearUsuarioBSComponent,
    path: 'crear'
  },
  {
    component: RutaOpcionesPrincipalesComponent,
    path: 'opciones'
  },
  {
    component: RutaClientes,
    path: 'clientes',
    canActivate: [EstaLogueadoBSGuard],
    children: [
      {
        path: 'listaservicios',
        component: RutaListaServiciosComponent
      },
      {
        path: 'listaanuncios/:id',
        component: RutaListaAnunciosCliComponent
      },
      {
        path: 'solicitudes/:id',
        component: RutaSolictudesCliComponent
      },
      {
        path:'',
        redirectTo: 'listaservicios',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'anuncios',
    component: RutaAnunciosComponent,
    canActivate: [EstaLogueadoBSGuard],
    children: [
      {
        path: 'contacto',
        component: RutaCrearContactoComponent
      },
      {
        path: 'nuevo',
        component: RutaCrearAnuncioComponent
      },
      {
        path: 'gestion/:id',
        component: RutaGestionAnuncios
      },
      {
        path: 'editarcontacto/:id',
        component: RutaEditarContactoComponent
      },
      {
        path: 'editaranuncio/:id',
        component: RutaEditarAnuncioComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
