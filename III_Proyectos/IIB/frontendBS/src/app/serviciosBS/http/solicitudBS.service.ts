import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SolicitudBSService {

  url = "http://localhost:1337"

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  obtenerSolicitudes(consulta?: string) {
    return this._httpClient.get(this.url + '/Solicitud?' + consulta)
  }


}
