import {Component, OnInit} from '@angular/core';
import {DataService} from "../../serviciosBS/mensajero/data.service";
import {AuthServiceBS} from "../../serviciosBS/auth/auth.service";
import {UsuarioBSService} from "../../serviciosBS/http/usuarioBS.service";
import {Router} from "@angular/router";
import {ClienteBSService} from "../../serviciosBS/http/clienteBS.service";

@Component({
  selector: 'navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.css']
})
export class NavbarPrincipalComponent implements OnInit {

  idAnunciante
  correoUsuarioActual

  constructor(
    private readonly _data: DataService,
    private readonly _authService: AuthServiceBS,
    private readonly _usuarioService: UsuarioBSService,
    private readonly _router: Router,
    private readonly _clienteService: ClienteBSService
  ) {
  }

  ngOnInit(): void {
    this.correoUsuarioActual = this._authService.correo
  }

  cerrarSesion(){
    this._data.enviarDatosUsuarioLogueado("Usuario Invitado")
    this._authService.estaAutenticado = false
    this._authService.correo = "Usuario Invitado"
  }

  validarSiEsAnunciante(){
    if (this._authService.estaAutenticado == true){
      this._usuarioService.obtenerUsuarioBS(this._authService.correo)
        .subscribe(
          (data: any[]) => {
            if(data[0].anunciante.length === 0){
              // Si no estaba registrado crea un nuevo contacto
              console.log("Usuario sin id anunciante")
              const url = ['/anuncios','contacto']
              this._router.navigate(url).then(x => x)
            }else{
              // Si ya estaba registrado actualiza su contacto
              console.log("Usuario ya registrado como anunciante")
              this.idAnunciante = data[0].anunciante[0].idContacto
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

  irAAnuncios(){
    this._usuarioService.obtenerUsuarioBS(this._authService.correo)
      .subscribe(
        (data: any[]) => {
          if(data[0].anunciante.length === 0){
            alert("No tienes anuncios publicados")
          }else{
            const url = ['/anuncios','gestion', data[0].anunciante[0].id]
            this._router.navigate(url).then(x => x)
          }
        }
      )
  }

  irASolicitudes(){
    this._usuarioService.obtenerUsuarioBS(this._authService.correo)
      .subscribe(
        (data: any[]) => {
          const idCliente = data[0].cliente[0].id
          this._clienteService.obtenerClienteBS(idCliente)
            .subscribe(
              (data: any) => {
                console.log(data)
                if(data.solicitudes.length === 0){
                  alert("No tienes servicios solictados")
                }else{
                  const url = ['/clientes','solicitudes', idCliente]
                  this._router.navigate(url).then(x => x)
                }
              },
              (error) => {
                console.log("Error buscando solicitudes")
              }
            )
        }
      )

  }

}
