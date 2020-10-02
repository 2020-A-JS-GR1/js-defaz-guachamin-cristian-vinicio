import { Component, OnInit } from '@angular/core';
import {UsuarioBSService} from "../../serviciosBS/http/usuarioBS.service";
import {Router} from "@angular/router";
import {DataService} from "../../serviciosBS/mensajero/data.service";
import {AuthServiceBS} from "../../serviciosBS/auth/auth.service";

@Component({
  selector: 'navbar-inicialBS',
  templateUrl: './navbar-inicial.component.html',
  styleUrls: ['./navbar-inicial.component.css']
})
export class NavbarInicialComponent implements OnInit {

  correoUsuarioActual: string;

  constructor(
    private readonly _auth: AuthServiceBS
  ) { }

  ngOnInit(): void {
    this.correoUsuarioActual = this._auth.correo
  }

}
