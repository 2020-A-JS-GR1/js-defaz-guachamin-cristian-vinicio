import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {
  @Input()
  urlImagen: string

  @Input()
  descripcion: string

  @Input()
  nombreBoton: string

  // Valores a mostrar con interpolación y/o property binding
  urlEjemploImagen = 'https://pbs.twimg.com/profile_images/727652546093813761/wsIRWa4h.jpg'
  textoEjemplo = 'Criss'
  linkTextoEjemplo = 'https://www.google.com.ec'


  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor() {
  }

  ejemploFuncion() {
    alert('Hola')
  }
  eventoOnBlur() {
    console.log('Blur')
  }


/*
  @Output()
  eventoDioClicEnBoton: EventEmitter<boolean> = new EventEmitter<boolean>()
  eventoDioClickImagen: EventEmitter<boolean> = new EventEmitter<boolean>()


  urlEjemploImagen = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/5d/c4/1e/5dc41e7f-e6da-e3aa-5aea-0c9bb3e13d50/source/256x256bb.jpg'
  LinkTextoEjemplo = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/5d/c4/1e/5dc41e7f-e6da-e3aa-5aea-0c9bb3e13d50/source/256x256bb.jpg'

  constructor() {
  }

  ngOnInit(): void {
  }

  ejemploFuncion() {
    alert('Hola')
  }

  ejecutarEventoDioClick() {
    this.eventoDioClicEnBoton.emit(true)
  }

  ejecutarEventoDioClickImagen() {
    this.eventoDioClickImagen.emit(true)
  }

  eventoOnBlur() {
    console.log('Blur')
  }
*/


}
