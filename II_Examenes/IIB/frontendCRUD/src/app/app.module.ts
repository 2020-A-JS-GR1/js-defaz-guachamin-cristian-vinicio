import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicialComponent } from './RutasCRUD/ruta-inicial/ruta-inicial.component';
import { RutaEditarComidaComponent } from './RutasCRUD/ruta-editar-comida/ruta-editar-comida.component';
import { RutaListaComidaComponent } from './RutasCRUD/ruta-lista-comida/ruta-lista-comida.component';
import { RutaCrearComidaComponent } from './RutasCRUD/ruta-crear-comida/ruta-crear-comida.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {ComidaService} from "./ServiciosCRUD/comida.service";
import {HttpClientModule} from "@angular/common/http";
import { RutaListaIngredientesComponent } from './RutasCRUD/ruta-lista-ingredientes/ruta-lista-ingredientes.component';
import { RutaComidasComponent } from './RutasCRUD/ruta-comidas/ruta-comidas.component';
import { RutaIngredientesComponent } from './RutasCRUD/ruta-ingredientes/ruta-ingredientes.component';
import { RutaCrearIngredienteComponent } from './RutasCRUD/ruta-crear-ingrediente/ruta-crear-ingrediente.component';
import { RutaEditarIngredienteComponent } from './RutasCRUD/ruta-editar-ingrediente/ruta-editar-ingrediente.component';
import { FormComidaComponent } from './ComponentesCRUD/form-comida/form-comida.component';
import { FormIngredienteComponent } from './ComponentesCRUD/form-ingrediente/form-ingrediente.component';
import {IngredienteService} from "./ServiciosCRUD/ingrediente.service";

@NgModule({
  declarations: [
    AppComponent,
    RutaInicialComponent,
    RutaEditarComidaComponent,
    RutaListaComidaComponent,
    RutaCrearComidaComponent,
    RutaListaIngredientesComponent,
    RutaComidasComponent,
    RutaIngredientesComponent,
    RutaCrearIngredienteComponent,
    RutaEditarIngredienteComponent,
    FormComidaComponent,
    FormIngredienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ComidaService,
    IngredienteService,
    RutaListaComidaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
