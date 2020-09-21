import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  // Para llenar el formulario si está vacío
  @Input()
  nombreInput: string

  @Input()
  cedulaInput: string

  @Input()
  estadoCivilInput: string

  // Pasar información del componente hijo al padre:
  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>()



  // Si estos 3 variables están vacías: crear
  // Si estos 3 variables están llenas: editar
  nombreModelo: string
  cedulaModelo: string
  estadoCivilModelo: string

  constructor() { }

  ngOnInit(): void {
    if(this.nombreInput && this.cedulaInput && this.estadoCivilInput){
      this.nombreModelo = this.nombreInput
      this.cedulaModelo = this.cedulaInput
      this.estadoCivilModelo = this.estadoCivilInput
    }
  }

  crearUsuario(formulario){
    const cedula = this.cedulaModelo
    const esNumero = !Number.isNaN(Number(cedula))
    if(esNumero){
      // Llamar al servicio HTTP y enviar UN POST al servidor
      // con los datos del formulario
      // Primero llamamos al eventEmitter:
      this.informacionValidada.emit({
        nombre: this.nombreModelo,
        cedula: this.cedulaModelo,
        estadoCivil: this.estadoCivilModelo
      })
      console.log("Listo :)")
    }else{
      console.error("No es numero")
    }
  }

  ayuda(){
    alert("Ayuda")
  }

}
