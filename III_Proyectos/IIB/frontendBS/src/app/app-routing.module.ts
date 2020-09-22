import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicialComponent} from "./rutasBS/ruta-inicial/ruta-inicial.component";
import {RutaCrearUsuarioComponent} from "./rutasBS/ruta-crear-usuario/ruta-crear-usuario.component";
import {RutaLoginUsuarioComponent} from "./rutasBS/ruta-login-usuario/ruta-login-usuario.component";
import {RutaOpcionesPrincipalesComponent} from "./rutasBS/ruta-opciones-principales/ruta-opciones-principales.component";
import {RutaListaAnunciosComponent} from "./rutasBS/ruta-lista-anuncios/ruta-lista-anuncios.component";

const routes: Routes = [
  {
    component: RutaInicialComponent,
    path:'inicio'
  },
  {
    component: RutaLoginUsuarioComponent,
    path: 'login'
  },
  {
    component: RutaCrearUsuarioComponent,
    path: 'crear'
  },
  {
    component: RutaOpcionesPrincipalesComponent,
    path: 'opciones'
  },
  {
    component: RutaListaAnunciosComponent,
    path: 'anuncios'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
