import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ComidaService {

  url = "http://localhost:1337"

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  /* Obtener comidas de backend */
  obtenerUnoPorId(idComida: number) {
    return this._httpClient.get(this.url + '/Comidas/' + idComida)
  }

  obtenerComidas(consulta?: string) {
    return this._httpClient.get(this.url + "/Comidas?" + consulta) // Petición
  }

  crearComida(comida) {
    return this._httpClient.post(this.url + "/Comidas", comida);
  }

  editarComida(comida, id) {
    return this._httpClient.put(
      this.url + "/Comidas/" + id, // URL
      comida
    )
  }

  eliminarComida(idComida: number) {
    return this._httpClient.delete(this.url + "/Comidas/" + idComida);
  }
}
