import { Component, OnInit } from '@angular/core';
import {UsuarioBSService} from "../../serviciosBS/http/usuarioBS.service";
import {Router} from "@angular/router";
import {DataService} from "../../serviciosBS/mensajero/data.service";

@Component({
  selector: 'navbar-inicialBS',
  templateUrl: './navbar-inicial.component.html',
  styleUrls: ['./navbar-inicial.component.css']
})
export class NavbarInicialComponent implements OnInit {

  correoUsuarioActual: string;

  constructor(
    private readonly _data: DataService
  ) { }

  ngOnInit(): void {
    this._data.currentMessage
      .subscribe(message => this.correoUsuarioActual = message)
  }

}
