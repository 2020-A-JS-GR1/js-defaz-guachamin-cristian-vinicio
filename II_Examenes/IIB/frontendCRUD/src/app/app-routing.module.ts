import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicialComponent} from "./RutasCRUD/ruta-inicial/ruta-inicial.component";
import {RutaListaComidaComponent} from "./RutasCRUD/ruta-lista-comida/ruta-lista-comida.component";
import {RutaListaIngredientesComponent} from "./RutasCRUD/ruta-lista-ingredientes/ruta-lista-ingredientes.component";
import {RutaComidasComponent} from "./RutasCRUD/ruta-comidas/ruta-comidas.component";
import {RutaCrearComidaComponent} from "./RutasCRUD/ruta-crear-comida/ruta-crear-comida.component";
import {RutaEditarComidaComponent} from "./RutasCRUD/ruta-editar-comida/ruta-editar-comida.component";
import {RutaIngredientesComponent} from "./RutasCRUD/ruta-ingredientes/ruta-ingredientes.component";
import {RutaCrearIngredienteComponent} from "./RutasCRUD/ruta-crear-ingrediente/ruta-crear-ingrediente.component";
import {RutaEditarIngredienteComponent} from "./RutasCRUD/ruta-editar-ingrediente/ruta-editar-ingrediente.component";

const routes: Routes = [
  {
    component: RutaInicialComponent,
    path: 'inicio'
  },
  {
    component: RutaComidasComponent,
    path: 'comidas',
    children: [
      {
        component: RutaListaComidaComponent,
        path: 'lista',
      },
      {
        component: RutaCrearComidaComponent,
        path: 'crear',
      },
      {
        component: RutaEditarComidaComponent,
        path: 'editar/:id',
      },
      // Hijos del hijo
      {
        component: RutaIngredientesComponent,
        path: 'ingredientes',
        children: [
          {
            component: RutaListaIngredientesComponent,
            path: 'lista/:id',
          },
          {
            component: RutaCrearIngredienteComponent,
            path: 'crear/:id',
          },
          {
            component: RutaEditarIngredienteComponent,
            path: 'editar/:id',
          },
          {
            path: '',
            redirectTo: 'lista',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
