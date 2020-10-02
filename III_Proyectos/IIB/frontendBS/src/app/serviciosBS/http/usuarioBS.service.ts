import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsuarioBSService {

  url = "http://localhost:1337"
  datosUsuarioActual

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  crearNuevoUsuario(usuario) {
    return this._httpClient.post(this.url + "/Usuario", usuario)
  }

  // Obtener id a partir de sus correo
  obtenerIdUusario(correoUsuario) {
    return this._httpClient.get(this.url + '/Usuario?where={"correo":"' + correoUsuario + '"}')
  }

}
