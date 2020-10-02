import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ServiciosBSService {

  url = "http://localhost:1337"

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  obtenerServicios(consulta?: string) {
    return this._httpClient.get(this.url + '/Servicio/' + consulta)
  }

  obtenerIddServicio(nombreServicio: string) {
    return this._httpClient.get(this.url + '/Servicio?where={"descripcionServicio":"' + nombreServicio + '"}')
  }

  obtenerServicioPorId(idServicio: number){
    return this._httpClient.get(this.url + '/Servicio?where={"id":' + idServicio + '}')
  }

}
