import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.css']
})
export class RutaUsuarioComponent implements OnInit {

  arregloUsuarios = []

  constructor(
    private readonly _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    const observableTraerTodos = this._usuarioService.traerTodos()
    observableTraerTodos
      .subscribe(
        (usuarios: any[])=>{
          this.arregloUsuarios = usuarios
        },
        (error) => {
          console.log('Error', error)
        }
      )
  }

}
