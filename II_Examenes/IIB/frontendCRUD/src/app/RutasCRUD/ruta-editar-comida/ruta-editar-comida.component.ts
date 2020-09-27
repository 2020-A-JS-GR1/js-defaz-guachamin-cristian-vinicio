import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ComidaService} from "../../ServiciosCRUD/comida.service";

@Component({
  selector: 'app-ruta-editar-comida',
  templateUrl: './ruta-editar-comida.component.html',
  styleUrls: ['./ruta-editar-comida.component.css']
})
export class RutaEditarComidaComponent implements OnInit {

  comida // Clase
  mostrarFormulario = false // Falso hasta cargar los datos de comida

  constructor(
    private readonly _comidaService: ComidaService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params
    obsRuta
      .subscribe(
        (parametros) => { // Solo try, porque no fallará y es un parámetro
          const id = Number(parametros.id) // el 'id' fue definifo en app routing modules
          const obsComidas = this._comidaService
            .obtenerUnoPorId(id);
          obsComidas
            .subscribe(
              (comida: any) => {
                this.comida = comida
                this.llenarFormularioConDatosDeUsuario()
              },
              (error) => {
                console.error('Error', error)
              }
            )
        }
      )
  }

  llenarFormularioConDatosDeUsuario(){
    this.mostrarFormulario = true
  }

  editarComida(comida){
    const obsEditarUsuario = this._comidaService.editarComida(comida, this.comida.id)
    obsEditarUsuario
      .subscribe(
        (datos)=>{
          const url = ['/comidas', 'lista']
          this._router.navigate(url).then(x => x)
        },
        (error) => {
          console.error('Error: ', error)

        }
      )
  }

}
