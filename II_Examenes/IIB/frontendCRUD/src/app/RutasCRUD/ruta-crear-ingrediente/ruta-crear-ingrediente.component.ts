import {Component, OnInit} from '@angular/core';
import {IngredienteService} from "../../ServiciosCRUD/ingrediente.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ComidaService} from "../../ServiciosCRUD/comida.service";

@Component({
  selector: 'app-ruta-crear-ingrediente',
  templateUrl: './ruta-crear-ingrediente.component.html',
  styleUrls: ['./ruta-crear-ingrediente.component.css']
})
export class RutaCrearIngredienteComponent implements OnInit {

  idComidaNueva: number

  constructor(
    private readonly _ingredienteService: IngredienteService,
    private readonly _comidaService: ComidaService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Recibimos parametro enviado por el boton de agreagr ingrediente
    const obsRuta = this._activatedRoute.params
    obsRuta
      .subscribe(
        (parametros) => {
          this.idComidaNueva = Number(parametros.id)
        }
      )
  }

  crearNuevoIngrediente(nuevoIngrediente) {
    console.log("Nuevo ingrediente a ingresar")
    console.log(nuevoIngrediente)
    console.log(this.idComidaNueva)
    nuevoIngrediente.idComida = this.idComidaNueva
    console.log("Ingrediente a ingresar con ID")
    console.log(nuevoIngrediente)
    const obsCrearComida = this._ingredienteService.crearIngrediente(nuevoIngrediente);
    obsCrearComida.subscribe(
      (datos) => {
        console.log(datos)
        const url = ['/comidas/ingredientes', 'lista', this.idComidaNueva]
        this._router.navigate(url).then(x => x)
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }

    obtenerIdComida(nombreComida: string) {
    const idNuevaComoda = this._comidaService
      .obtenerDatosPorNombreComida(nombreComida)
      idNuevaComoda
      .subscribe(
        (datos: any) => {
          this.idComidaNueva= datos.id
        },
        (error) => {
          console.log("Error obteniedo id", error);
        }
      )

  }

}
