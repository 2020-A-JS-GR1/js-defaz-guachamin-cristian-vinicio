import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class IngredienteService {

  url = "http://localhost:1337"

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  /* Obtener ingredientes de backend */
  obtenerUnoPorId(idComida: number) {
    return this._httpClient.get(this.url + '/Ingredientes/' + idComida)
  }

  obtenerIngredientes(consulta?: string) {
    return this._httpClient.get(this.url + "/Ingredientes?" + consulta)
  }

  crearIngrediente(ingrediente) {
    return this._httpClient.post(this.url + "/Ingredientes", ingrediente);
  }

  editarIngrediente(ingrediente, id) {
    return this._httpClient.put(
      this.url + "/Ingredientes/" + id, // URL
      ingrediente
    )
  }

}
