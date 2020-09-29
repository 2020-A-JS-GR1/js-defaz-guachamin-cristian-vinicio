import { Component, OnInit } from '@angular/core';
import {ServiciosBSService} from "../../serviciosBS/http/serviciosBS.service";
import {Router} from "@angular/router";

@Component({
  selector: 'form-nuevo-anuncio',
  templateUrl: './form-nuevo-anuncio.component.html',
  styleUrls: ['./form-nuevo-anuncio.component.css']
})
export class FormNuevoAnuncioComponent implements OnInit {

  arregloServicios

  constructor(
    private readonly _serviciosBs: ServiciosBSService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this.cargarServicios()
  }

  cargarServicios(){
    const obsServicios = this._serviciosBs.obtenerServicios("")
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

  crearAnuncio(formularioAnuncio){
    // Validar anuncio e ir a gestion

    const ruta = ["/anuncios", "gestion"];
    this._router.navigate(ruta).then(x => x)
  }

}
