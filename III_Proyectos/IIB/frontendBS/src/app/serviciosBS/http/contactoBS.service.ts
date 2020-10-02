import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ContactoBSService {

  url = "http://localhost:1337"

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  crearNuevoContacto(contacto) {
    return this._httpClient.post(this.url + "/Contacto", contacto)
  }

  obtenerContactoPorId(idContacto: number){
    return this._httpClient.get(this.url + '/Contacto/' + idContacto)
  }

  editarContacto(contacto, id) {
    return this._httpClient.patch(
      this.url + "/Contacto/" + id,
      contacto
    )
  }

}
