import { Component, OnInit } from '@angular/core';
import {ComidaService} from "../../ServiciosCRUD/comida.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-lista-comida',
  templateUrl: './ruta-lista-comida.component.html',
  styleUrls: ['./ruta-lista-comida.component.css']
})
export class RutaListaComidaComponent implements OnInit {

  arregloComidasBD = []
  busquedaModelo = ""

  constructor(
    private readonly _comidaService: ComidaService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerFiltrarComidas()
  }

  obtenerFiltrarComidas(){
    const consulta = {
      or: [
        {
          nombreComida: {
            contains: this.busquedaModelo
          }
        },
        {
          tipoComida: {
            contains: this.busquedaModelo
          }
        }
      ]

    }
    const consultaString = 'where=' + JSON.stringify(consulta)
    const obsComida = this._comidaService.obtenerComidas(
      this.busquedaModelo != '' ? consultaString : '')
    obsComida
      .subscribe(
        (comidas: any[]) => {
          this.arregloComidasBD = comidas;
        },
        (error) => {
          console.error('Error de quwww', error);
        }
      )
  }

  irAEditarComida(idComida: number){
    const ruta = ["/comidas", "editar", idComida];
    this._router.navigate(ruta).then(x => x)
  }

  irADetalleIngredientes(idComida: number) {
    const ruta = ["/comidas/ingredientes", "lista", idComida];
    this._router.navigate(ruta).then(x => x)
  }

  eliminarComida(idComida: number){
    const obsEliminarComida = this._comidaService.eliminarComida(idComida);
    obsEliminarComida.subscribe(
      () => {
        const indice = this.arregloComidasBD
          .findIndex( comida => comida.id === idComida);
        this.arregloComidasBD.splice(indice,1);
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }
}
