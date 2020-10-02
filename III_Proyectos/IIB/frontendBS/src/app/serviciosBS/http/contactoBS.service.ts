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


}
