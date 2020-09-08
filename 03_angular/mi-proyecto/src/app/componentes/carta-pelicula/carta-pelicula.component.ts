import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit, OnDestroy {
  @Input()
  urlImagen: string

  @Input()
  descripcion: string

  @Input()
  nombreBoton: string

  @Output()
  eventoDioClicEnBoton: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  eventoDioClicEnImagen: EventEmitter<boolean> = new EventEmitter<boolean>()

  // Valores a mostrar con interpolación y/o property binding
  // urlEjemploImagen = 'https://pbs.twimg.com/profile_images/727652546093813761/wsIRWa4h.jpg'
  // textoEjemplo = 'Criss'
  linkTextoEjemplo = 'https://www.google.com.ec'

  constructor() { console.log("Constructor") }

  ngOnInit(): void { console.log("INIT") }

  ngOnDestroy(): void {
    console.log("Destroy")
    // Aquí se desuscriben todas las suscripciones.
  }

  ejemploFuncion() {
    alert('Hola')
  }

  eventoOnBlur() {
    console.log('Blur')
  }

  ejecutarEventoDioClick() {
    this.eventoDioClicEnBoton.emit(true)
  }

  ejecutarEventoDioClickImagen() {
    this.eventoDioClicEnImagen.emit(true)
  }

}

