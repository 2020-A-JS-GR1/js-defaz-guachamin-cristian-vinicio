import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-ingrediente',
  templateUrl: './form-ingrediente.component.html',
  styleUrls: ['./form-ingrediente.component.css']
})
export class FormIngredienteComponent implements OnInit {

  // Para llenar el formulario si esta vacio
  @Input() nombreIngredienteInput: string
  @Input() tipoIngredienteInput: string
  @Input() cantidadInput: number
  @Input() refrigeracionInput: string

  // Transfiere información del componente hijo (form) al padre (rutaCrear)
  @Output() informacionValidadaIngrediente: EventEmitter<any> = new EventEmitter<any>()

  // Variables modelo para crear (si estan vacias) o editar (si estan llenas)
  nombreIngredienteModelo: string
  tipoIngredienteModelo: string
  cantidadModelo: number
  refrigeracionModelo: string

  constructor(
    private readonly _router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.nombreIngredienteInput && this.tipoIngredienteInput
      && this.cantidadInput && this.refrigeracionInput) {
      this.nombreIngredienteModelo = this.nombreIngredienteInput
      this.tipoIngredienteModelo = this.tipoIngredienteInput
      this.cantidadModelo = this.cantidadInput
      this.refrigeracionModelo = this.refrigeracionInput
    }
  }

  crearIngrediente(formualrioIngrediente) {
    this.informacionValidadaIngrediente.emit(
      {
        nombreIngrediente: this.nombreIngredienteModelo,
        tipoIngrediente: this.tipoIngredienteModelo,
        cantidadIngrediente: this.cantidadModelo,
        refrigeracion: this.refrigeracionModelo,
      }
    )
  }


}
