import { Component, OnInit } from '@angular/core';
import {ContactoBSService} from "../../serviciosBS/http/contactoBS.service";
import {DataService} from "../../serviciosBS/mensajero/data.service";
import {UsuarioBSService} from "../../serviciosBS/http/usuarioBS.service";
import {Router} from "@angular/router";
import {AnuncianteService} from "../../serviciosBS/http/anunciante.service";

@Component({
  selector: 'app-ruta-crear-contacto',
  templateUrl: './ruta-crear-contacto.component.html',
  styleUrls: ['./ruta-crear-contacto.component.css']
})
export class RutaCrearContactoComponent implements OnInit {

  correoUsuarioActual: string;

  constructor(
    private _contactoService: ContactoBSService,
    private readonly _data: DataService,
    private readonly _usuarioService: UsuarioBSService,
    private readonly _router: Router,
    private readonly _anuncianteService: AnuncianteService
  ) { }

  ngOnInit(): void {
    this._data.currentMessage
      .subscribe(message => this.correoUsuarioActual = message)
  }

  crearContacto(formulario){
    const nuevoContacto = {
      "direccion": formulario.direccion,
      "ciudad": formulario.ciudad,
      "celular": formulario.celular,
      "convencional": formulario.convencional,
      "urlFacebook": formulario.urlFacebook,
      "organizacion": formulario.organizacion
    }
    console.log("voy a crear el contacto")
    this._contactoService.crearNuevoContacto(nuevoContacto)
      .subscribe(
        (contactoCreado: any) => {
          console.log(contactoCreado)
          console.log("idContactoCreado: ", contactoCreado.id)
          console.log(this.correoUsuarioActual)
          this._usuarioService.obtenerUsuarioBS(this.correoUsuarioActual)
            .subscribe(
              (usuarioActual: any[]) => {
                console.log("Usuario actual")
                console.log(usuarioActual)
                this.crearAnunciante(usuarioActual[0].id, contactoCreado.id, formulario.ocupacion )
              },
              error => {
                console.log("Error buscando usuario", error)
              }
            )
        },
        error => {
          console.log("Error creando contacto", error)
        }
      )
  }

  crearAnunciante(idUsuario: number, idContacto: number, ocupacion: string){
    const nuevoAnunciante = {
      "idUsuario": idUsuario,
      "idContacto": idContacto,
      "reputacion": 10,
      "ocupacion": ocupacion,
      "experiencia": 1
    }
    this._anuncianteService.crearAnunciante(nuevoAnunciante)
      .subscribe(
        (data) => {
          const url = ['/anuncios', 'nuevo']
          this._router.navigate(url).then(x => x)
        },
        error => {
          console.log("Error creando anunciante", error)
        }
      )
  }
}
