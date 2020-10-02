import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'form-loginUsuarioBS',
  templateUrl: './form-login-usuario.component.html',
  styleUrls: ['./form-login-usuario.component.css']
})
export class FormLoginUsuarioComponent implements OnInit {

  @Input() correoInput
  @Input() contraseniaInput

  correoLoginModelo: string
  contraseniaLoginModelo: string

  @Output() credencialesValidadas: EventEmitter<any> = new EventEmitter<any>()

  constructor(
  ) { }

  ngOnInit(): void {
    if (this.correoInput && this.contraseniaInput) {
      this.correoLoginModelo = this.correoInput
      this.contraseniaLoginModelo = this.contraseniaInput
    }
  }

  revisarCredenciales(credenciales){
    this.credencialesValidadas.emit({
      correo: this.correoLoginModelo,
      contrasenia: this.contraseniaLoginModelo
    })

  }


}
