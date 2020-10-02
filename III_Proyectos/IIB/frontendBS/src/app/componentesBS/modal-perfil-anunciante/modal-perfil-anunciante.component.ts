import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AnunciosBSService} from "../../serviciosBS/http/anunciosBS.service";
import {Router} from "@angular/router";
import {UsuarioBSService} from "../../serviciosBS/http/usuarioBS.service";
import {AuthServiceBS} from "../../serviciosBS/auth/auth.service";
import {SolicitudBSService} from "../../serviciosBS/http/solicitudBS.service";
import {AnuncianteService} from "../../serviciosBS/http/anunciante.service";

@Component({
  selector: 'app-modal-perfil-anunciante',
  templateUrl: './modal-perfil-anunciante.component.html',
  styleUrls: ['./modal-perfil-anunciante.component.css']
})
export class ModalPerfilAnuncianteComponent implements OnInit {
  currentRate = 6;
  arregloDatosAnunciante
  closeResult = '';

  @Input() idAnuncio: number
  @Input() idAnunciante: number

  constructor(
    private readonly modalService: NgbModal,
    private readonly _anuncioService: AnunciosBSService,
    private readonly _router: Router,
    private readonly _authService: AuthServiceBS,
    private readonly _usuarioService: UsuarioBSService,
    private readonly _solicitudService: SolicitudBSService,
    private readonly _anuncianteService: AnuncianteService
  ) {
  }

  ngOnInit(): void {
    console.log("idAnuncio recibido:" , this.idAnuncio)
    console.log("idanunciante recibido:" , this.idAnunciante)
    this.obtenerAnunciantePorAnuncio()
  }

  obtenerAnunciantePorAnuncio() {
    this._anuncianteService.obtenerDatosAnunciante(this.idAnunciante)
      .subscribe(
        (data: any) => {
          this.arregloDatosAnunciante = data
        },
        error => {
          console.log("error obtenido id anunciante", error)
        }
      )
  }

  crearSolicitud() {
    this._usuarioService.obtenerUsuarioBS(this._authService.correo)
      .subscribe(
        (data: any) => {
          const idCliente = data[0].cliente[0].id
          const nuevaSolicitud = {
            "idCliente": idCliente,
            "idAnuncio": this.idAnuncio,
            "fechaSolicitud": new Date().toISOString().slice(0, 10).toString()
          }
          this._solicitudService.crearSolicitud(nuevaSolicitud)
            .subscribe(
              (data) => {
                const ruta = ["/clientes", "solicitudes", idCliente];
                this._router.navigate(ruta).then(x => x)
              },
              error => {
                console.log("Error creando solicitud", error)
              }
            )
        },
        error => {
          console.log("Error obteniendo id", error)
        }
      )

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
      .result.then((result) => {
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
