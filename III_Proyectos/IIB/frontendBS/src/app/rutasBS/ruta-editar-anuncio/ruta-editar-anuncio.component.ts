import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AnunciosBSService} from "../../serviciosBS/http/anunciosBS.service";
import {ServiciosBSService} from "../../serviciosBS/http/serviciosBS.service";

@Component({
  selector: 'app-ruta-editar-anuncio',
  templateUrl: './ruta-editar-anuncio.component.html',
  styleUrls: ['./ruta-editar-anuncio.component.css']
})
export class RutaEditarAnuncioComponent implements OnInit {

  mostrarFormulario = false
  datosAnuncio
  descripcionServicio

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _servicioService: ServiciosBSService,
    private readonly _anuncioService: AnunciosBSService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params
    obsRuta
      .subscribe(
        (parametros) => {
          const id = Number(parametros.id)
          const obsAnuncio = this._anuncioService
            .obtenerAnuncioPorId(id);
          obsAnuncio
            .subscribe(
              (anuncio: any) => {
                console.log("anuncio como any")
                console.log(anuncio)
                this.datosAnuncio = anuncio
                this.mostrarFormulario = true
                console.log("datos anuncio")
                console.log(this.datosAnuncio)
                console.log(this.datosAnuncio.idServicio)
                console.log(this.datosAnuncio.idServicio.id)
                this.buscarNombreServicio(this.datosAnuncio.idServicio.id)
              },
              (error) => {
                console.error('Error', error)
              }
            )
        }
      )
  }

  editarAnuncio(anuncio){
    this._servicioService.obtenerIddServicio(anuncio.descripcionServicio)
      .subscribe(
        (servicio: any) => {
          const anuncioEditado = {
            "idServicio": servicio[0].id,
            "descripcionAnuncio": anuncio.descripcionAnuncio,
            "costo": anuncio.costo
          }
          console.log("Nuevo anuncio editado")
          console.log(anuncioEditado)
          console.log("idANUNCIANTE")
          console.log(this.datosAnuncio.idAnunciante.id)
          this._anuncioService.editarAnuncio(anuncioEditado, this.datosAnuncio.id)
            .subscribe(
              (datos) => {
                const url = ['/anuncios', 'gestion', this.datosAnuncio.idAnunciante.id]
                this._router.navigate(url).then(x => x)
              },
              (error) => {
                console.error('Error editando anuncio: ', error)
              }
            )
        }
      )
  }

  buscarNombreServicio(id: number){
    console.log("ya buscando")
    this._servicioService.obtenerServicioPorId(id)
      .subscribe(
        (data: any) => {
          console.log(data)
          console.log(data[0].descripcionServicio)
          this.descripcionServicio = data[0].descripcionServicio
          console.log("nombre de servicio:", this.descripcionServicio)
        },
        (error) => {
          console.error('Error buscando nombre de servicio: ', error)
        }
      )
  }

}
