import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ClienteBSService {

  url = "http://localhost:1337"

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  crearClientedeUsuario(idUsuarioCreado: number){
    const cliente = {"idUsuario": +idUsuarioCreado}
    return this._httpClient.post(this.url + "/Cliente", cliente)
  }

  obtenerClienteBS(idCliente: number) {
    return this._httpClient.get(this.url + '/Cliente/'+idCliente)
  }

}
