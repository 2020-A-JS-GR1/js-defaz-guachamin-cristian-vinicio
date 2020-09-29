import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-lista-anuncios-an',
  templateUrl: './ruta-gestion-anuncios.component.html',
  styleUrls: ['./ruta-gestion-anuncios.component.css']
})
export class RutaGestionAnuncios implements OnInit {

  listaAnuncios
  listaResenias

  constructor() { }

  ngOnInit(): void {
  }

}
