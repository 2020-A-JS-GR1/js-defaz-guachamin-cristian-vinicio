import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ReseniaService {

  url = "http://localhost:1337"

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  crearResenia(resenia){
    return this._httpClient.post(this.url + "/Resenia", resenia)
  }

}
