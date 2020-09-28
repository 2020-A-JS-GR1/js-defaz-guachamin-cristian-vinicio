import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-comidas',
  templateUrl: './ruta-comidas.component.html',
  styleUrls: ['./ruta-comidas.component.css']
})
export class RutaComidasComponent implements OnInit {

  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const rutaListaComidas = ['/comidas', 'lista']
    this._router.navigate(rutaListaComidas).then(x => x)
  }

}
