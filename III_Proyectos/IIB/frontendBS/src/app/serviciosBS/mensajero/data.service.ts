import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('Usuario invitado');
  currentMessage = this.messageSource.asObservable();

/*  private idUsuarioLogueado = new BehaviorSubject(0);
  usuarioActual = this.idUsuarioLogueado.asObservable();*/

  constructor() {
  }

  enviarDatosUsuarioLogueado(message: string) {
    this.messageSource.next(message)
  }
/*
  enviariDUsuarioLogueado(message: number) {
    this.idUsuarioLogueado.next(message)
  }*/
}

