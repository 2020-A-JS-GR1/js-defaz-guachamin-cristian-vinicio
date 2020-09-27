import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  @Input() ComidaInput: number // Aqui deberia estar el id de la nueva comida

  // Transfiere información del componente hijo (form) al padre (rutaCrear)
  @Output() informacionValidadaIngrediente: EventEmitter<any> = new EventEmitter<any>()
  // Transferir idComida a RutaCrearIngrediente
  // @Output() idDeMiComida: EventEmitter<any> = new EventEmitter<any>()

  // Variables modelo para crear (si estan vacias) o editar (si estan llenas)
  nombreIngredienteModelo: string
  tipoIngredienteModelo: string
  cantidadModelo: number
  refrigeracionModelo: string
  idComidaModelo: number

  constructor() { }

  ngOnInit(): void {
    if (this.nombreIngredienteInput && this.tipoIngredienteInput
      && this.cantidadInput && this.refrigeracionInput) {
      this.nombreIngredienteModelo = this.nombreIngredienteInput
      this.tipoIngredienteModelo = this.tipoIngredienteInput
      this.cantidadModelo = this.cantidadInput
      this.refrigeracionModelo = this.refrigeracionInput
      this.idComidaModelo = this.ComidaInput
    }
  }

  crearIngrediente(formualrioIngrediente) {
    const data = {
      nombreIngrediente: this.nombreIngredienteModelo,
      tipoIngrediente: this.tipoIngredienteModelo,
      cantidadIngrediente: this.cantidadModelo,
      refrigeracion: this.refrigeracionModelo,
      idComida: this.ComidaInput
    }
    console.log("Datos que voy a emitir")
    console.log(data)
    this.informacionValidadaIngrediente.emit(
      data
    )
  }

  // obtenerIdComida(formualrioIngrediente){
  //   this.idDeMiComida.emit(
  //     {
  //       idComida: this.idComidaModelo
  //     }
  //   )
  // }

}
