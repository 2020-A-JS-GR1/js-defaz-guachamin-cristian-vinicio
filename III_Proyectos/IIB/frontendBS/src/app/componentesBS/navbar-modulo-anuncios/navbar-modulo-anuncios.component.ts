import { Component, OnInit } from '@angular/core';
import {DataService} from "../../serviciosBS/mensajero/data.service";
import {AuthServiceBS} from "../../serviciosBS/auth/auth.service";

@Component({
  selector: 'navbar-modulo-anuncios',
  templateUrl: './navbar-modulo-anuncios.component.html',
  styleUrls: ['./navbar-modulo-anuncios.component.css']
})
export class NavbarModuloAnunciosComponent implements OnInit {

  correoUsuarioActual: string;

  constructor(
    private readonly _data: DataService,
    private readonly _authService: AuthServiceBS

  ) { }

  ngOnInit(): void {
    this._data.currentMessage
      .subscribe(message => this.correoUsuarioActual = message)
  }

  cerrarSesion(){
    this._data.enviarDatosUsuarioLogueado("Usuario Invitado")
    this._authService.estaAutenticado = false
  }

}
