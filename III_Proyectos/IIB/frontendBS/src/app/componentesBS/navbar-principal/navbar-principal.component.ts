import {Component, OnInit} from '@angular/core';
import {DataService} from "../../serviciosBS/mensajero/data.service";
import {AuthServiceBS} from "../../serviciosBS/auth/auth.service";

@Component({
  selector: 'navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.css']
})
export class NavbarPrincipalComponent implements OnInit {

  correoUsuarioActual: string;

  constructor(
    private readonly _data: DataService,
    private readonly _authService: AuthServiceBS
  ) {
  }

  ngOnInit(): void {
    this._data.currentMessage
      .subscribe(message => this.correoUsuarioActual = message)
  }

  cerrarSesion(){
    this._data.enviarDatosUsuarioLogueado("Usuario Invitado")
    this._authService.estaAutenticado = false
  }

}
