import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-dedicacion',
  templateUrl: './form-dedicacion.component.html',
  styleUrls: ['./form-dedicacion.component.css']
})
export class FormDedicacionComponent implements OnInit {

  ocupacionModelo: string

  constructor() { }

  ngOnInit(): void {
  }

  revisarDedicacion(dedicacionForm){

  }

}
