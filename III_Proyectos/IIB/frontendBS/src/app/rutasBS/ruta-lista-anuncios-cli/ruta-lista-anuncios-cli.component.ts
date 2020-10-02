import {Component, Input, OnInit} from '@angular/core';
import {AnunciosBSService} from "../../serviciosBS/http/anunciosBS.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-lista-anuncios',
  templateUrl: './ruta-lista-anuncios-cli.component.html',
  styleUrls: ['./ruta-lista-anuncios-cli.component.css']
})
export class RutaListaAnunciosCliComponent implements OnInit {

  arregloAnunciosXServ

  constructor(
    private readonly _anuncioService: AnunciosBSService,
    private readonly _activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    // Obtengo el parametro enviado desde cada servicio para buscar anuncios
    const obsRuta = this._activatedRoute.params
      obsRuta
      .subscribe(
        (parametros) => {
          const id = Number(parametros.id)
          this.obtenerAnunciosPorServicios(id)
        }
      )
  }

  obtenerAnunciosPorServicios(idServicio: number){
    const consulta = 'where={"idServicio":'+idServicio+'}'
    const obsServicios = this._anuncioService.obtenerTodosLosAnuncios(consulta)
    obsServicios
      .subscribe(
        (data: any) => {
          this.arregloAnunciosXServ = data
          console.log("arregloAnunciosXServ: ")
          console.log(this.arregloAnunciosXServ)
        },
        (error) => {
          console.error("Error al obtener anuncios", error)
        }
      )
  }

}
