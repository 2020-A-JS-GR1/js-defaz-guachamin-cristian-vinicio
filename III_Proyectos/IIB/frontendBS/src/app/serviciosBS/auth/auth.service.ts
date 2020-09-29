import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../mensajero/data.service";

@Injectable()
export class AuthServiceBS {

  estaAutenticado = false
  correo: string

  url = 'http://localhost:1337'

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _data: DataService
  ) {
  }

  login (correo: string, cedula: string){
    this.correo = correo
    return this._httpClient.get(
      this.url + '/Usuario?correo=' + correo + '&contrasenia=' + cedula
    )

  }

  enviarDatosAlNavbar(){
    this._data.enviarDatosUsuarioLogueado(this.correo)
  }

}
