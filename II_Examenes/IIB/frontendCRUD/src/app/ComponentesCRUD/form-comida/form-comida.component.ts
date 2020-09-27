import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-comida',
  templateUrl: './form-comida.component.html',
  styleUrls: ['./form-comida.component.css']
})
export class FormComidaComponent implements OnInit {

  // Para llenar el formulario si esta vacio
  @Input() nombreComidaInput: string
  @Input() tipoComidaInput: string
  @Input() nacionalidadInput: string
  @Input() numPersonasInput: number
  @Input() picanteInput: string

  // Transfiere información del componente hijo (form) al padre (rutaCrear)
  @Output() informacionValidada: EventEmitter<any> = new EventEmitter<any>()

  // Variables modelo para crear (si estan vacias) o editar (si estan llenas)
  nombreComidaModelo: string
  tipoComidaModelo: string
  nacionalidadModelo: string
  numPersonasModelo: number
  picanteModelo: string

  constructor() {
  }

  ngOnInit(): void {
    if (this.nombreComidaInput && this.tipoComidaInput && this.nacionalidadInput &&
      this.numPersonasInput && this.picanteInput) {
      this.nombreComidaModelo = this.nombreComidaInput
      this.tipoComidaModelo = this.tipoComidaInput
      this.nacionalidadModelo = this.nacionalidadInput
      this.numPersonasModelo = this.numPersonasInput
      this.picanteModelo = this.picanteInput
    }
  }

  // Envia al formulario padre
  crearComida(formularioComida) {
    this.informacionValidada.emit(
      {
        nombreComida: this.nombreComidaModelo,
        tipoComida: this.tipoComidaModelo,
        nacionalidad: this.nacionalidadModelo,
        numeroPersonas: this.numPersonasModelo,
        picante: this.picanteModelo
      }
    )
  }



}
