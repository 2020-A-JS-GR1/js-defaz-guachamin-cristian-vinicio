import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsuarioBSService} from "../../serviciosBS/http/usuarioBS.service";
import {Router} from "@angular/router";
import {ClienteBSService} from "../../serviciosBS/http/clienteBS.service";
import {AuthServiceBS} from "../../serviciosBS/auth/auth.service";

@Component({
  selector: 'app-ruta-crear-usuario-bs',
  templateUrl: './ruta-crear-usuario-bs.component.html',
  styleUrls: ['./ruta-crear-usuario-bs.component.css']
})
export class RutaCrearUsuarioBSComponent implements OnInit {

  @Output() datosUsuario: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private readonly _usuarioService: UsuarioBSService,
    private readonly _clienteService: ClienteBSService,
    private readonly _authService: AuthServiceBS,
    private readonly _router: Router
  ) {
  }

  ngOnInit(): void {
  }

  crearUsuario(usuario) {
    console.log(usuario)
    const observable = this._usuarioService.crearNuevoUsuario(usuario)
    observable
      .subscribe(
        (datos: any) => {
          // Al crear un usuario, inicia sesion y crea un cliente
          console.log(datos)
          this._authService.login(datos.correo, datos.contrasenia)
            .subscribe(
              (arregloUsuarios: any[]) => {
                if (arregloUsuarios.length > 0) {
                  this._authService.estaAutenticado = true
                  this.crearNuevoCliente(datos.id)
                } else {
                  this._authService.estaAutenticado = false
                  alert("Credenciales incorrectas")
                }
              },
              (error) => {
                console.error('Error', error)
              }
            )
        },
        (error) => {
          console.error('Error: ', error)
        }
      )
  }

  crearNuevoCliente(idUsuario: number) {
    const obsCliente = this._clienteService.crearClientedeUsuario(idUsuario)
    obsCliente.subscribe(
      (data: any) => {
        const url = ['/opciones']
        this._router.navigate(url).then(x => x)
      },
      (error) => {
        console.error('Error: ', error)
      }
    )
  }

}
