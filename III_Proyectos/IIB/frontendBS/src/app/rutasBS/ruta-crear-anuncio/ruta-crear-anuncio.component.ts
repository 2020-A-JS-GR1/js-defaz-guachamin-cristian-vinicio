import {Component, OnInit} from '@angular/core';
import {ServiciosBSService} from "../../serviciosBS/http/serviciosBS.service";
import {DataService} from "../../serviciosBS/mensajero/data.service";
import {AnunciosBSService} from "../../serviciosBS/http/anunciosBS.service";
import {Router} from "@angular/router";
import {UsuarioBSService} from "../../serviciosBS/http/usuarioBS.service";

@Component({
  selector: 'app-ruta-crear-anuncio',
  templateUrl: './ruta-crear-anuncio.component.html',
  styleUrls: ['./ruta-crear-anuncio.component.css']
})
export class RutaCrearAnuncioComponent implements OnInit {

  correoUsuarioActual: string;
  idAnunciante: number

  constructor(
    private readonly _servicioService: ServiciosBSService,
    private readonly _usuarioService: UsuarioBSService,
    private readonly _anuncioService: AnunciosBSService,
    private readonly _data: DataService,
    private readonly _router: Router
  ) {
  }

  ngOnInit(): void {
    this._data.currentMessage
      .subscribe(message => this.correoUsuarioActual = message)
    console.log("coreo actual en el imnit")
    console.log(this.correoUsuarioActual)
    this.obtenerAnunciante()
  }


  crearNuevoAnuncio(datosFormulario) {
    console.log("Ahora si, creando anuncio")
    this._servicioService.obtenerIddServicio(datosFormulario.descripcionServicio)
      .subscribe(
        (servicio: any) => {
          console.log("idservicio en buscar servicio")
          console.log(servicio[0].id)
          const nuevoAnuncio = {
            "idAnunciante": this.idAnunciante,
            "idServicio": servicio[0].id,
            "fechaAnuncio": new Date().toISOString().slice(0, 10).toString(),
            "descripcionAnuncio": datosFormulario.descripcionAnuncio,
            "costo": datosFormulario.costo,
            "estadoAnuncio": "A"
          }
          this._anuncioService.crearAnuncio(nuevoAnuncio)
            .subscribe(
              (anuncioCreado) => {
                const ruta = ["/anuncios", "gestion", this.idAnunciante];
                this._router.navigate(ruta).then(x => x)
              },
              error => {
                console.log("Error creando anuncio", error)
              }
            )
        },
        error => {
          console.log("Error buscando Id", error)
        }
      )


  }

  obtenerAnunciante() {
    console.log("Correo usuario actual")
    console.log(this.correoUsuarioActual)
    this._usuarioService.obtenerUsuarioBS(this.correoUsuarioActual)
      .subscribe(
        (usuarioActual: any[]) => {
          console.log("Usuario actual en obtener anunciante")
          console.log(usuarioActual)
          console.log("Id anunciante:")
          console.log(usuarioActual[0].anunciante[0].id)
          this.idAnunciante = usuarioActual[0].anunciante[0].id
        },
        error => {
          console.log("Error buscando anunciante", error)
        }
      )
  }

}
