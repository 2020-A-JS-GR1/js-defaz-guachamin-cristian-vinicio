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

  crearIngredienteServicio(ingrediente) {
    return this._httpClient.post(this.url + "/Ingredientes", ingrediente);
  }

  editarIngredienteServicio(ingrediente, idIngrediente) {
    return this._httpClient.put(
      this.url + "/Ingredientes/" + idIngrediente, // URL
      ingrediente
    )
  }

  eliminarIngredienteServicio(idIngrediente: number) {
    return this._httpClient.delete(this.url + "/Ingredientes/" + idIngrediente);
  }

}
