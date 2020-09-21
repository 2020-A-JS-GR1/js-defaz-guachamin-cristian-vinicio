import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {

  usuario // clase
  mostrarFormulario = false // estará en falso hasta cargar los datos del usuario
  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
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
                this.llenarFormularioConDatosDeUsuario()
              },
              (error) => {
                console.error('Error', error)
              }
            )
        }
      )
  }

  llenarFormularioConDatosDeUsuario(){
    this.mostrarFormulario = true
  }

  editarUsuario(usuario){
    const obsEditarUsuario = this._usuarioService.editar(usuario, this.usuario.id)
    obsEditarUsuario
      .subscribe(
        (datos)=>{
          const url = ['/usuario', 'lista']
          this._router.navigate(url)
        },
        (error) => {
          console.error('Error: ', error)

        }
      )
  }

}




















