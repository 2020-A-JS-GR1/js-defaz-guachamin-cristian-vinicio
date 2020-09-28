import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IngredienteService} from "../../ServiciosCRUD/ingrediente.service";

@Component({
  selector: 'app-ruta-editar-ingrediente',
  templateUrl: './ruta-editar-ingrediente.component.html',
  styleUrls: ['./ruta-editar-ingrediente.component.css']
})
export class RutaEditarIngredienteComponent implements OnInit {

  ingrediente // Clase
  mostrarFormulario = false // Falso hasta cargar los datos de comida

  constructor(
    private readonly _ingredienteService: IngredienteService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) {
  }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params
    obsRuta
      .subscribe(
        (parametros) => { // Solo try, porque no fallará y es un parámetro
          const id = Number(parametros.id) // el 'id' fue definifo en app routing modules
          const obsIngredientes = this._ingredienteService
            .obtenerUnoPorId(id);
          obsIngredientes
            .subscribe(
              (ingrediente: any) => {
                this.ingrediente = {
                  "id": ingrediente.id,
                  "nombreIngrediente": ingrediente.nombreIngrediente,
                  "tipoIngrediente": ingrediente.tipoIngrediente,
                  "cantidadIngrediente": ingrediente.cantidadIngrediente,
                  "refrigeracion": ingrediente.refrigeracion,
                  "idComida": ingrediente.idComida.id
                }
                this.llenarFormularioConDatosDeUsuario()
              },
              (error) => {
                console.error('Error', error)
              }
            )
        }
      )
  }

  llenarFormularioConDatosDeUsuario() {
    this.mostrarFormulario = true
  }

  editarIngrediente(ingredienteForm) {
    const ingredienteActualizado = {
      "id": ingredienteForm.id,
      "nombreIngrediente": ingredienteForm.nombreIngrediente,
      "tipoIngrediente": ingredienteForm.tipoIngrediente,
      "cantidadIngrediente": ingredienteForm.cantidadIngrediente,
      "refrigeracion": ingredienteForm.refrigeracion,
      "idComida": this.ingrediente.idComida
    }
    const obsEditarUsuario = this._ingredienteService.editarIngredienteServicio(ingredienteActualizado, this.ingrediente.id)
    obsEditarUsuario
      .subscribe(
        (datos) => {
          const url = ['/comidas/ingredientes/lista/', this.ingrediente.idComida]
          this._router.navigate(url).then(x => x)
        },
        (error) => {
          console.error('Error: ', error)

        }
      )
  }

}
