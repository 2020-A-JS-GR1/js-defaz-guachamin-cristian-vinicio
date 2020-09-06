import { Component } from '@angular/core';

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
      url: "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/5d/c4/1e/5dc41e7f-e6da-e3aa-5aea-0c9bb3e13d50/source/256x256bb.jpg",
      descripcion: 'Descripcion1',
      nombrePelicula: 'Playmobil'
    },
    {
      id: 2,
      url: "https://i2.wp.com/i274.photobucket.com/albums/jj275/PunkoJotaViL/Mac%20Appz-Gamez/Sims2.png",
      descripcion: 'Descripcion2',
      nombrePelicula: 'SIMS 2'
    },
    {
      id: 3,
      url: "https://pbs.twimg.com/profile_images/3628043916/42488f150daf8efc42aaa40a71b5b88d.png",
      descripcion: 'Descripcion3',
      nombrePelicula: 'Ambel'
    }
  ]

  arregloNumeros = [1,2,3]

  mensajeConsola(objeto: boolean){
    console.log("Llego el evento", objeto)
  }
}
