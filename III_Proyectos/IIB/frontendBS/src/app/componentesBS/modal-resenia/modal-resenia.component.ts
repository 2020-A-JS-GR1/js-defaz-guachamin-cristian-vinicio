import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AnuncianteService} from "../../serviciosBS/http/anunciante.service";
import {ReseniaService} from "../../serviciosBS/http/resenia.service";

@Component({
  selector: 'app-modal-resenia',
  templateUrl: './modal-resenia.component.html',
  styleUrls: ['./modal-resenia.component.css']
})
export class ModalReseniaComponent implements OnInit {

  currentRate = 8;
  closeResult = '';
  datosAnunciante

  @Input() idAnunciante
  @Input() idCliente

  comentarioModelo
  comentario

  @Output() datodsdeResenia: EventEmitter<any> = new EventEmitter<any>()


  constructor(
    private readonly modalService: NgbModal,
    private readonly _serviceAnunciante: AnuncianteService,
    private readonly _reseniaService: ReseniaService
  ) { }

  ngOnInit(): void {
    console.log("idAnunciante recibido ", this.idAnunciante)
    console.log("idCliente recibido ", this.idCliente)
    this.obtenerDatosAnunciante(this.idAnunciante)
  }

  obtenerDatosAnunciante(idAnunciante: number){
    this._serviceAnunciante.obtenerDatosAnunciante(idAnunciante)
      .subscribe(
        (data: any) => {
          console.log(data)
          this.datosAnunciante = data
        },
        (error) => {
          console.log("Error obteniendo anunciante", error)
        }
      )
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${ModalReseniaComponent.getDismissReason(reason)}`;
    });
  }

  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  revisarComentario(datosFomrulario){
    console.log(this.comentarioModelo)
    const nuevaResenia = {
      "calificacion": this.currentRate,
      "comentario": this.comentarioModelo,
      "idAnunciante": this.idAnunciante,
      "idCliente": this.idCliente
    }
    console.log("A gregar:")
    console.log(nuevaResenia)
    this._reseniaService.crearResenia(nuevaResenia)
      .subscribe(
        (datos) => {
          console.log("Resenia creada correctamente")
          console.log(datos)
        },
        (error) => {
          console.log("Error creando resenia", error)
        }
      )

  }

}
