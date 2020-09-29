import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthServiceBS} from "../auth/auth.service";

@Injectable()
export class EstaLogueadoBSGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this._authServiceBs.estaAutenticado) {
      this._authServiceBs.enviarDatosAlNavbar()
      return true
    }else{
      alert("Necesitas inicar sesión antes de continuar")
      const rutaLogin = ["/login"]
      this._router.navigate(rutaLogin).then(x => x)
      return false
    }

  }

  constructor(
    private readonly _authServiceBs: AuthServiceBS,
    private readonly _router: Router,
  ) {
  }


}
