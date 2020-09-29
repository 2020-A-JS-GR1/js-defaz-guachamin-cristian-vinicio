import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AnunciosBSService {

  url = "http://localhost:1337"

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  obtenerAnuncios(consulta?: string) {
    return this._httpClient.get(this.url + '/Anuncio?' + consulta)
  }

  obtenerUnoPorId(idAnuncio: number) {
    return this._httpClient.get(this.url + '/Anuncio/' + idAnuncio)
  }

  obtenerDatosAnunciante(idAnunciante: number) {
    return this._httpClient.get(this.url + '/Anunciante/' + idAnunciante)
  }

}
