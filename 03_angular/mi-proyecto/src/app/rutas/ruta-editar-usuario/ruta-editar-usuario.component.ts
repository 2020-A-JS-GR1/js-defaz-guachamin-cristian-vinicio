import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {

  usuario // clase
  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params
    obsRuta
      .subscribe(
        (parametros) => { // Solo try, porque no fallará y es un parámetro
          const id = Number(parametros.id) // el 'id' fue definifo en app routing modules
          const obsUsuarios = this._usuarioService
            .obtenerUnoPorId(id);
          obsUsuarios
            .subscribe(
              (usuario: any) => {
                this.usuario = usuario
              },
              (error) => {
                console.error('Error', error)
              }
            )
        }
      )
  }

}




















