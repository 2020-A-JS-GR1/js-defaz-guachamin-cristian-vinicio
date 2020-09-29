import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AnunciosBSService} from "../../serviciosBS/http/anunciosBS.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-perfil-anunciante',
  templateUrl: './modal-perfil-anunciante.component.html',
  styleUrls: ['./modal-perfil-anunciante.component.css']
})
export class ModalPerfilAnuncianteComponent implements OnInit, OnDestroy{
  currentRate = 6;
  arregloDatosAnunciante
  closeResult = '';
  arregloContacto

  @Input() idAnunciante: number

  constructor(
    private readonly modalService: NgbModal,
    private readonly _anuncioService: AnunciosBSService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerAnunciantePorAnuncio(this.idAnunciante)
  }

  ngOnDestroy(): void {
    this.irAAnunciosDelServicio(1)
  }

  obtenerAnunciantePorAnuncio(idAnunciante: number){
    const obsServicios = this._anuncioService.obtenerDatosAnunciante(idAnunciante) // en vacio, trae todos
    obsServicios
      .subscribe(
        (data: any) => {
          this.arregloDatosAnunciante = data
        },
        (error) => {
          console.error("Error al obtener datos anunciante", error)
        }
      )
  }

  irAAnunciosDelServicio(idCliente: number){
    // Registrar l solicitud  e ir ListaSolicitudes
    const ruta = ["/clientes", "solicitudes", idCliente];
    this._router.navigate(ruta).then(x => x)
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${ModalPerfilAnuncianteComponent.getDismissReason(reason)}`;
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



}
