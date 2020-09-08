import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "./servicios/http/usuario.service";

@Component({
  selector: 'aplicacion_nueva',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mi-proyecto';
  habilitado = true

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

  arregloUsuarios = [];

  arregloNumeros = [1, 2, 3]

  arregloObservables = []

  // Inyectando dependencias en el componente principal
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }

  /* La siguiente función devuelve un observable, similar a una promesa con then y catch
  * Pero en este caso, se tiene un '.suscribe' */
/*  mensajeConsola(objeto: boolean) {
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
  }*/

  /*
    mensajeConsola(objeto: boolean){
      console.log("Llego el evento", objeto)
    }
  */

  ngOnInit() {
    this.mensajeConsola(true)
  }

  mensajeConsola(objeto: boolean) {
    console.log("Llego el evento", objeto)
    const observableTraerTodos = this._usuarioService.traerTodos()
    // const suscripcion = observableTraerTodos.subscribe(
    observableTraerTodos.subscribe(
      (data) => { // THEN TRY
        this.arregloUsuarios = data as any[]
        console.log(data)
      },
      (error) => { // CATCH
        console.log(error)
      }
    )
    // this.arregloObservables.push(suscripcion)
    // suscripcion.unsubscribe()
  }

  crearUsuario(){
    const usuarioNuevo = {
      cedula: '1234567895',
      nombre: 'Naruto',
      apellido: 'Uzumaki'
    }
    const observableCrearUsuario = this._usuarioService.crear(usuarioNuevo)
    observableCrearUsuario.subscribe(
      (datos) => { // THEN TRY
        console.log('Nuevo usuario: ', datos)
        // Para popular una tabla, volver a llamar al backend de nuevo
        this.mensajeConsola(true)
      },
      (error) => { // CATCH
        console.log(error)
      }
    )

  }

}















