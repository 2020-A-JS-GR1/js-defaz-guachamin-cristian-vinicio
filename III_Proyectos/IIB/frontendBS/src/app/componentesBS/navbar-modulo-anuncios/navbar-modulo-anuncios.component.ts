import { Component, OnInit } from '@angular/core';
import {DataService} from "../../serviciosBS/mensajero/data.service";
import {AuthServiceBS} from "../../serviciosBS/auth/auth.service";
import {UsuarioBSService} from "../../serviciosBS/http/usuarioBS.service";
import {Router} from "@angular/router";

@Component({
  selector: 'navbar-modulo-anuncios',
  templateUrl: './navbar-modulo-anuncios.component.html',
  styleUrls: ['./navbar-modulo-anuncios.component.css']
})
export class NavbarModuloAnunciosComponent implements OnInit {

  correoUsuarioActual: string;

  constructor(
    private readonly _data: DataService,
    private readonly _auth: AuthServiceBS,
    private readonly _usuarioService: UsuarioBSService,
    private readonly _router: Router

  ) { }

  ngOnInit(): void {
    this._data.currentMessage
      .subscribe(message => this.correoUsuarioActual = message)
  }

  cerrarSesion(){
    this._data.enviarDatosUsuarioLogueado("Usuario Invitado")
    this._auth.estaAutenticado = false
    this._auth.correo = "Usuario Invitado"
  }

  mostrarAnuncios(){
    this._usuarioService.obtenerUsuarioBS(this._auth.correo)
      .subscribe(
        (data: any[]) => {
          if(data[0].anunciante.length === 0){
            alert("No tienes anuncios publicados")
          }else{
            const url = ['/anuncios','gestion', data[0].anunciante[0].id]
            this._router.navigate(url).then(x => x)
          }
        }
      )
  }

}
