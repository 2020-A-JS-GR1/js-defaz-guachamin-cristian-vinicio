import { Component, OnInit } from '@angular/core';
import {ServiciosBSService} from "../../serviciosBS/http/serviciosBS.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ruta-lista-serviciosBS',
  templateUrl: './ruta-lista-servicios.component.html',
  styleUrls: ['./ruta-lista-servicios.component.css']
})
export class RutaListaServiciosComponent implements OnInit {

  arregloServicios
  busquedaModelo = ""

  constructor(
    private readonly _servicisBS: ServiciosBSService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  //  this.obtenerServicios()
    this.filtrarServicios()
  }

  obtenerServicios(){
    const obsServicios = this._servicisBS.obtenerServicios("") // en vacio, trae todos
    obsServicios
      .subscribe(
        (data: any) => {
          this.arregloServicios = data
        },
        (error) => {
          console.error("Error al obtener servicios", error)
        }
      )
  }

  irAAnunciosDelServicio(idServicio: number){
    const ruta = ["/clientes", "listaanuncios", idServicio];
    this._router.navigate(ruta).then(x => x)
  }


  filtrarServicios(){
    const consulta = {
          descripcionServicio: {
            contains: this.busquedaModelo
          }
    }
    const consultaString = 'where=' + JSON.stringify(consulta)
    const obsServicios = this._servicisBS.obtenerServicios(
      this.busquedaModelo != '' ? consultaString : '')
    obsServicios
      .subscribe(
        (servicios: any) => {
          this.arregloServicios = servicios;
        },
        (error) => {
          console.error('Error de quwww', error);
        }
      )
  }

}
