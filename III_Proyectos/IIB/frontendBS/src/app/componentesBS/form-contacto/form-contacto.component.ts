import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {



  direccionmodelo
  ciudadModelo
  celularModelo
  convencionalModelo
  urlModelo
  organizacionModelo

  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  crearContacto(formContacto){
    // Validar contacto e ir a crear anuncio

    const ruta = ["/anuncios", "crear"];
    this._router.navigate(ruta).then(x => x)

  }

}
