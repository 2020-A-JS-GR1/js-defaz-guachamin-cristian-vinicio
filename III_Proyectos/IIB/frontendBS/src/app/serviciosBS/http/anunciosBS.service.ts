import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AnunciosBSService {

  url = "http://localhost:1337"

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  obtenerTodosLosAnuncios(consulta?: string) {
    return this._httpClient.get(this.url + '/Anuncio?' + consulta)
  }

  obtenerDatosAnunciante(idAnunciante: number) {
    return this._httpClient.get(this.url + '/Anunciante/' + idAnunciante)
  }

  /*
  *   obtenerDatosAnunciante(idAnunciante: number) {
    return this._httpClient.get(this.url + '/Anunciante/' + idAnunciante)
  }*/
  crearAnuncio(anuncio){
    return this._httpClient.post(this.url + "/Anuncio", anuncio)
  }

}

