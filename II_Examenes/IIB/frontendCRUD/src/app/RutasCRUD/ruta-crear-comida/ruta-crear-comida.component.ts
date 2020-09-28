import {Component, OnInit} from '@angular/core';
import {ComidaService} from "../../ServiciosCRUD/comida.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-comida',
  templateUrl: './ruta-crear-comida.component.html',
  styleUrls: ['./ruta-crear-comida.component.css']
})
export class RutaCrearComidaComponent implements OnInit {

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
      (datos:any) => {
        alert("Comida creada correctamente")
        this.datosNuevaComidaCreada = datos
        const url = ['/comidas/ingredientes', 'lista', datos.id]
        this._router.navigate(url).then(x => x)

      },
      (error) => {
        console.log("Error", error);
      }
    );
  }

}
