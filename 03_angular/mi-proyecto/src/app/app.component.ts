import {Component} from '@angular/core';
import {UsuarioService} from "./servicios/usuario.service";

@Component({
  selector: 'aplicacion_nueva',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';

  arregloPeliculas = [
    {
      id: 1,
      url: "https://pbs.twimg.com/profile_images/727652546093813761/wsIRWa4h.jpg",
      descripcion: 'El secuestro de la virgen de la montaña',
      nombrePelicula: 'Torcoroma'
    },
    {
      id: 2,
      url: "https://pbs.twimg.com/profile_images/3628043916/42488f150daf8efc42aaa40a71b5b88d.png",
      descripcion: 'Una historia de honor y sangre',
      nombrePelicula: 'Ambel'
    },
    {
      id: 3,
      url: "https://i2.wp.com/i274.photobucket.com/albums/jj275/PunkoJotaViL/Mac%20Appz-Gamez/Sims2.png",
      descripcion: 'La verdad no recuerdo xd',
      nombrePelicula: 'SIMS 2'
    }
  ]

  arregloNumeros = [1, 2, 3]

  // Inyectando dependencias en el componente principal
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }

  /* La siguiente función devuelve un observable, similar a una promesa con then y catch
  * Pero en este caso, se tiene un '.suscribe' */
  mensajeConsola(objeto: boolean) {
    console.log("Llego el evento", objeto)
    const observableTraerTodos = this._usuarioService.traerTodos()
    observableTraerTodos.subscribe(
      (data) => { // THEN
        console.log(data)
      },
      (error) => { // CATCH
        console.log(error)
      }
    )
  }

  /*
    mensajeConsola(objeto: boolean){
      console.log("Llego el evento", objeto)
    }
  */

}

