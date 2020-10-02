import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiciosBSService} from "../../serviciosBS/http/serviciosBS.service";
import {Router} from "@angular/router";

@Component({
  selector: 'form-nuevo-anuncio',
  templateUrl: './form-nuevo-anuncio.component.html',
  styleUrls: ['./form-nuevo-anuncio.component.css']
})

export class FormNuevoAnuncioComponent implements OnInit {

  arregloServicios

  @Input() servicioInput
  @Input() descripcionInput
  @Input() valorInput: number

  @Output() anuncioValidado: EventEmitter<any> = new EventEmitter<any>()

  servicioModelo
  descripcionModelo
  valorModelo: number

  constructor(
    private readonly _serviciosBs: ServiciosBSService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this.cargarServicios()
    if(this.servicioInput && this.descripcionInput && this.valorInput){
      this.servicioModelo = this.servicioInput
      this.descripcionModelo = this.servicioInput
      this.valorModelo = this.valorInput
    }
  }

  cargarServicios(){
    const obsServicios = this._serviciosBs.obtenerServicios("")
    obsServicios
      .subscribe(
        (data: any) => {
          this.arregloServicios = data
        },
        (error) => {
          console.error("Error al obtener servicios", error)
        }
      )
  }

  revisarAnuncio(formularioAnuncio) {
    this.anuncioValidado.emit(
      {
        descripcionServicio: this.servicioModelo,
        descripcionAnuncio: this.descripcionModelo,
        costo: this.valorModelo
      }
    )
  }

}
