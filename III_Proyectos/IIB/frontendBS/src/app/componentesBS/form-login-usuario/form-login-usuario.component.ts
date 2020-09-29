import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'form-loginUsuarioBS',
  templateUrl: './form-login-usuario.component.html',
  styleUrls: ['./form-login-usuario.component.css']
})
export class FormLoginUsuarioComponent implements OnInit {

  closeResult = '';
  constructor(
    private readonly modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;console.log(this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed ${FormLoginUsuarioComponent.getDismissReason(reason)}`;console.log(this.closeResult);
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

  loguearUsuarioBS(credenciales){
    console.log("Mis datos?")
    console.log(this.closeResult)
  }
}
