import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AnunciosBSService} from "../../serviciosBS/http/anunciosBS.service";
import {AnuncianteService} from "../../serviciosBS/http/anunciante.service";

@Component({
  selector: 'app-ruta-lista-anuncios-an',
  templateUrl: './ruta-gestion-anuncios.component.html',
  styleUrls: ['./ruta-gestion-anuncios.component.css']
})
export class RutaGestionAnuncios implements OnInit {

  listaAnuncios
  listaResenias
  idAnunciante

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _anuncianteService: AnuncianteService
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params
    obsRuta
      .subscribe(
        (parametros) => {
          this.idAnunciante = Number(parametros.id)
          this.cargarAnunciosYResenias(this.idAnunciante)
        }
      )
  }

  cargarAnunciosYResenias (idAnunciante: number) {
    this._anuncianteService.obtenerDatosAnunciante(idAnunciante)
      .subscribe(
        (data: any) => {
          this.listaAnuncios = data.anuncios
          this.listaResenias = data.resenias
        },
        error => {
          console.log("Error cargando datos anunciante", error)
        }
      )
  }

  cargarResenias(idAnunciante: number) {

  }

}
