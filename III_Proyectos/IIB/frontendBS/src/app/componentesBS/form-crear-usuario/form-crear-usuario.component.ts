import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'form-crearUsuarioBS',
  templateUrl: './form-crear-usuario.component.html',
  styleUrls: ['./form-crear-usuario.component.css']
})
export class FormCrearUsuarioComponent implements OnInit {

  closeResult = '';
  constructor(
    private readonly modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${FormCrearUsuarioComponent.getDismissReason(reason)}`;
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

  crearUsuarioBS(datosFormCrearUsuarioBS){

  }

}
