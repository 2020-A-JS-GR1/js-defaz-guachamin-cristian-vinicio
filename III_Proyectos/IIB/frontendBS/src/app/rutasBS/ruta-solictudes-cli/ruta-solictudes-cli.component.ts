import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SolicitudBSService} from "../../serviciosBS/http/solicitudBS.service";

@Component({
  selector: 'app-ruta-solictudes-cliente',
  templateUrl: './ruta-solictudes-cli.component.html',
  styleUrls: ['./ruta-solictudes-cli.component.css']
})
export class RutaSolictudesCliComponent implements OnInit {

  arregloSolicitudes
  idClienteFromParametro

  constructor(
    private readonly _solictudService: SolicitudBSService,
    private readonly _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params
    obsRuta
      .subscribe(
        (parametros) => {
          const id = Number(parametros.id)
          this.idClienteFromParametro = id
          this.mostrarSolictudesCliente(id)
        }
      )
  }

  mostrarSolictudesCliente(idCliente){
    const consulta = 'where={"idCliente":'+idCliente+'}'
    const obsServicios = this._solictudService.obtenerSolicitudes(consulta)
    obsServicios
      .subscribe(
        (data: any) => {
          this.arregloSolicitudes = data
          console.log(data)
          console.log("intentando sacar idanunciante")
          console.log(data[0].idAnuncio.idAnunciante)
          console.log(this.arregloSolicitudes)
        },
        (error) => {
          console.error("Error al obtener solicitudes", error)
        }
      )
  }

}
