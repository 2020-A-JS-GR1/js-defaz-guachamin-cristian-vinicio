import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ruta-anuncios',
  templateUrl: './ruta-anuncios.component.html',
  styleUrls: ['./ruta-anuncios.component.css']
})
export class RutaAnunciosComponent implements OnInit {

  @Input() datosUsuarioLogueado

  constructor() { }

  ngOnInit(): void {
  }

}
