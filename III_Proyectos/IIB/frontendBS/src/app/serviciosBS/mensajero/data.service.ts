import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('Usuario invitado');
  currentMessage = this.messageSource.asObservable();

  constructor() {
  }

  enviarDatosUsuarioLogueado(message: string) {
    this.messageSource.next(message)
  }

}

