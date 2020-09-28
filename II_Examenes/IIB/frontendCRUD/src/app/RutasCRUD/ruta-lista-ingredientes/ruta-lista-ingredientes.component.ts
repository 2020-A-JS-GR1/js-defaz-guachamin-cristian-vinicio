import {Component, OnInit} from '@angular/core';
import {ComidaService} from "../../ServiciosCRUD/comida.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IngredienteService} from "../../ServiciosCRUD/ingrediente.service";

@Component({
  selector: 'app-ruta-lista-ingredientes',
  templateUrl: './ruta-lista-ingredientes.component.html',
  styleUrls: ['./ruta-lista-ingredientes.component.css']
})
export class RutaListaIngredientesComponent implements OnInit {

  arregloIngredientesBD = []
  busquedaModeloIng = ""
  mostrarFormulario = false // Falso hasta cargar los datos de comida
  idComidaParaIngredientes

  constructor(
    private readonly _comidaService: ComidaService,
    private readonly _ingredienteService: IngredienteService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) {
  }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params
    obsRuta
      .subscribe(
        (parametros) => { // Solo try, porque no fallará y es un parámetro
          const idComida = Number(parametros.id) // el 'id' fue definifo en app routing modules
          this.idComidaParaIngredientes = idComida
          this.obtenerIngredientes(idComida)
          this.llenarFormularioConDatosDeUsuario()
        }
      )

  }

  llenarFormularioConDatosDeUsuario(){
    this.mostrarFormulario = true
  }

  obtenerIngredientes(idComida: number) {
    console.log(this.arregloIngredientesBD)
    const consulta = 'where={"idComida": ' + idComida + '}'
    this._ingredienteService.obtenerIngredientes(consulta)
      .subscribe(
        (ingrediente: any[]) => {
          this.arregloIngredientesBD = ingrediente;
        },
        (error) => {
          console.error('Error obteniendo ingredientes', error);
        }
      )
  }

  obtenerFiltrarIngrediente() {
    const consultaIng = {
      or: [
        {
          nombreIngrediente: {
            contains: this.busquedaModeloIng
          }
        },
        {
          tipoIngrediente: {
            contains: this.busquedaModeloIng
          }
        }
      ]
    }
    const consultaString = 'where=' + JSON.stringify(consultaIng)
    const obsIngrediente = this._ingredienteService.obtenerIngredientes(
      this.busquedaModeloIng != '' ? consultaString : '')
    obsIngrediente
      .subscribe(
        (ingrediente: any[]) => {
          this.arregloIngredientesBD = ingrediente;
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

  irAEditarIngrediente(idIngrediente: number) {
    const ruta = ["/comidas/ingredientes", "editar", idIngrediente];
    this._router.navigate(ruta).then(x => x)
  }

  irACrearNuevoIngrediente(){
    const ruta = ["/comidas/ingredientes", "crear", this.idComidaParaIngredientes];
    this._router.navigate(ruta).then(x => x)
  }

  eliminarIngrediente(idIngrediente: number){
    const obsEliminarIngrediente = this._ingredienteService.eliminarIngredienteServicio(idIngrediente)
    obsEliminarIngrediente.subscribe(
      () => {
        const indice = this.arregloIngredientesBD
          .findIndex( ingrediente => ingrediente.id === idIngrediente);
        this.arregloIngredientesBD.splice(indice,1);
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }

}
