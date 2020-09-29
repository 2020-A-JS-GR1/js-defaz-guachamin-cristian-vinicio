import { Component, OnInit } from '@angular/core';
import {AuthServiceBS} from "../../serviciosBS/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-login-usuario-bs',
  templateUrl: './ruta-login-usuario-bs.component.html',
  styleUrls: ['./ruta-login-usuario-bs.component.css']
})
export class RutaLoginUsuarioBSComponent implements OnInit {

  constructor(
    private readonly _authService: AuthServiceBS,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  loguearUsuario(formularioLogin){

    console.log(formularioLogin)
    const obsLogin = this._authService.login(formularioLogin.correo, formularioLogin.contrasenia)
    obsLogin
      .subscribe(
        (arregloUsuarios: any[])=>{
          if(arregloUsuarios.length > 0){
            this._authService.estaAutenticado = true
            const url = ['/opciones']
            this._router.navigate(url).then(x => x)
          }else{
            this._authService.estaAutenticado = false
            alert("Credenciales incorrectas")
          }
        },
        (error) =>{
          console.error('Error',  error)
        }

      )
  }

}
