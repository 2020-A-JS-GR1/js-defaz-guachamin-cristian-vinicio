import { Component, OnInit } from '@angular/core';
import {UsuarioBSService} from "../../serviciosBS/http/usuarioBS.service";
import {AuthServiceBS} from "../../serviciosBS/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ruta-opciones-principales',
  templateUrl: './ruta-opciones-principales.component.html',
  styleUrls: ['./ruta-opciones-principales.component.css']
})
export class RutaOpcionesPrincipalesComponent implements OnInit {

  idUsuario
  correoUsuarioActual

  constructor(
    private readonly _usuarioService: UsuarioBSService,
    private readonly _auth: AuthServiceBS,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  validarSiEsAnunciante(){
    if (this._auth.estaAutenticado == true){
      this._usuarioService.obtenerUsuarioBS(this._auth.correo)
        .subscribe(
          (data: any[]) => {
            console.log("idContacto", data[0].anunciante)
            if(data[0].anunciante.length === 0){
              // Si no estaba registrado crea un nuevo contacto
              console.log("Usuario sin id anunciante")
              const url = ['/anuncios','contacto']
              this._router.navigate(url).then(x => x)
            }else{
              // Si ya estaba registrado actualiza su contacto
              console.log("Usuario registrado como anunciante")
              const url = ['/anuncios','editarcontacto', data[0].anunciante[0].idContacto]
              this._router.navigate(url).then(x => x)
            }
          }
        )
    }else{
      alert("Necesitas inicar sesión antes de continuar")
      this._router.navigate(["/login"]).then(x => x)
    }
  }

}
