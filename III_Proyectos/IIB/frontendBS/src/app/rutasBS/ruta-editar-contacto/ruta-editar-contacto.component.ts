import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContactoBSService} from "../../serviciosBS/http/contactoBS.service";

@Component({
  selector: 'app-ruta-editar-contacto',
  templateUrl: './ruta-editar-contacto.component.html',
  styleUrls: ['./ruta-editar-contacto.component.css']
})
export class RutaEditarContactoComponent implements OnInit {

  mostrarFormulario = false
  datosContacto

  constructor(

    private readonly _activatedRoute: ActivatedRoute,
    private readonly _contactoService: ContactoBSService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params
    obsRuta
      .subscribe(
        (parametros) => {
          const id = Number(parametros.id)
          const obsContacto = this._contactoService
            .obtenerContactoPorId(id);
          obsContacto
            .subscribe(
              (contacto: any) => {
                this.datosContacto = contacto
                this.mostrarFormulario = true
              },
              (error) => {
                console.error('Error', error)
              }
            )
        }
      )
  }

  editarContactoAnunciante(contacto) {
    const contactoEditado = {
      "direccion": contacto.direccion,
      "ciudad": contacto.ciudad,
      "celular": contacto.celular,
      "convencional": contacto.convencional,
      "urlFacebook": contacto.urlFacebook,
      "organizacion": contacto.organizacion
    }
    const obsEditarUsuario = this._contactoService.editarContacto(contactoEditado, this.datosContacto.id)
    obsEditarUsuario
      .subscribe(
        (datos) => {
          const url = ['/anuncios', 'nuevo']
          this._router.navigate(url).then(x => x)
        },
        (error) => {
          console.error('Error: ', error)

        }
      )
  }

}
