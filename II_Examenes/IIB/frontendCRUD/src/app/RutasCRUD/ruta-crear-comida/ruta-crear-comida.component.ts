import {Component, OnInit} from '@angular/core';
import {ComidaService} from "../../ServiciosCRUD/comida.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-comida',
  templateUrl: './ruta-crear-comida.component.html',
  styleUrls: ['./ruta-crear-comida.component.css']
})
export class RutaCrearComidaComponent implements OnInit {

  comidaCreada = false
  datosNuevaComidaCreada

  constructor(
    private readonly _comidaService: ComidaService,
    private readonly _router: Router
  ) {
  }

  ngOnInit(): void {
  }

  crearNuevaComida(nuevaComida) {
    const obsCrearComida = this._comidaService.crearComida(nuevaComida);
    obsCrearComida.subscribe(
      (datos) => {
        this.datosNuevaComidaCreada = datos
        this.comidaCreada = true
        // const url = ['/comidas', 'lista']
        // this._router.navigate(url).then(x => x)
        console.log(datos)
       // this.obtenerIdComida(this.datosNuevaComidaCreada.nombreComida)
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }

}
