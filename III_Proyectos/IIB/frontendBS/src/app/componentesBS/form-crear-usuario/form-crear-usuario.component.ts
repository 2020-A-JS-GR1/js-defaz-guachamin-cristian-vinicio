import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../serviciosBS/mensajero/data.service";

@Component({
  selector: 'form-crearUsuarioBS',
  templateUrl: './form-crear-usuario.component.html',
  styleUrls: ['./form-crear-usuario.component.css']
})
export class FormCrearUsuarioComponent implements OnInit {

  // Información que recibe desde el fomulario
  @Input() nombreInput
  @Input() apellidoInput
  @Input() correoInput
  @Input() contraseniaInput

  // Modelos, que se copian desde el formulario
  // Si estan vacias -> crear
  // Si estan llenas -> editar
  nombreModelo: string
  apellidoModelo: string
  correoModelo: string
  contraseniaModelo: string
  closeResult = '';

  // Pasarle info al componente Padre
  @Output() informacionValidada: EventEmitter<any> = new EventEmitter<any>()

  constructor (private data: DataService) {  }

  ngOnInit(): void {
    // Si los inputs están llenos, los gurdamos en los modelos
    if (this.nombreInput && this.apellidoInput && this.correoModelo && this.contraseniaInput) {
      this.nombreModelo = this.nombreInput
      this.apellidoModelo = this.apellidoInput
      this.correoModelo = this.correoInput
      this.contraseniaModelo = this.contraseniaInput
    }
  }

  emitirFormularioValidado(datosFormulario) {
    this.informacionValidada.emit({
      nombre: this.nombreModelo,
      apellido: this.apellidoModelo,
      correo: this.correoModelo,
      contrasenia: this.contraseniaModelo
    })
  }

}
