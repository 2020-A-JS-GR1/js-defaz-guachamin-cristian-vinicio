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
  ) {
  }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params
    obsRuta
      .subscribe(
        (parametros) => {
          this.idComidaNueva = Number(parametros.id)
        }
      )
  }

  crearNuevoIngrediente(nuevoIngrediente) {
    nuevoIngrediente.idComida = this.idComidaNueva
    const obsCrearComida = this._ingredienteService.crearIngredienteServicio(nuevoIngrediente);
    obsCrearComida.subscribe(
      (datos) => {
        alert("Ingrediente creado correctamente")
        const url = ['/comidas/ingredientes', 'lista', this.idComidaNueva]
        this._router.navigate(url).then(x => x)
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }

}
