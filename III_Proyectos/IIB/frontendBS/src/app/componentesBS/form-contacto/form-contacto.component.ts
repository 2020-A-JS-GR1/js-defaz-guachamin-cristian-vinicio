import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {

  @Input() direccionInput: string
  @Input() ciudadInput: string
  @Input() celularInput: string
  @Input() convencionalInput: string
  @Input() urlInput: string
  @Input() organizacionInput: string
  @Input() ocupacionInput: string

  @Output() contactoValidado: EventEmitter<any> = new EventEmitter<any>()

  direccionmodelo
  ciudadModelo
  celularModelo
  convencionalModelo
  urlModelo
  organizacionModelo

  ocupacionModelo

  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    if(this.direccionInput && this.ciudadInput && this.celularInput
    && this.convencionalInput && this.organizacionInput){
      this.direccionmodelo = this.direccionInput
      this.ciudadModelo = this.ciudadInput
      this.celularModelo = this.celularInput
      this.convencionalModelo = this.convencionalInput
      this.urlModelo = this.urlInput
      this.organizacionModelo = this.organizacionInput
      this.ocupacionModelo = this.ocupacionInput
    }
  }

  revisarContacto(formContacto){
    this.contactoValidado.emit({
      direccion: this.direccionmodelo,
      ciudad: this.ciudadModelo,
      convencional: this.convencionalModelo,
      celular: this.celularModelo,
      urlFacebook: this.urlModelo,
      organizacion: this.organizacionModelo,
      ocupacion: this.ocupacionModelo
    })

  /*  const ruta = ["/anuncios", "crear"];
    this._router.navigate(ruta).then(x => x)*/

  }

}
