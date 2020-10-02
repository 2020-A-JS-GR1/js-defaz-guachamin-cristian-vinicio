import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AnuncianteService {

  url = "http://localhost:1337"

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  crearAnunciante(anunciante){
    return this._httpClient.post(this.url + "/Anunciante", anunciante)
  }

  obtenerDatosAnunciante(idAunciante){
    return this._httpClient.get(this.url + "/Anunciante/"+idAunciante)
  }

}
