import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../auth/login.service";

@Injectable({
  providedIn: 'root'
})
class PermissionsService {
  private token = localStorage.getItem('user_token')

  constructor(
    private router:Router,
    private authServ: LoginService,
    ) {}

  canActivate() {
    return this.authServ.isLogin || this.token ? true : this.router.navigate(['auth', 'login'])
  }
}

export const canActivateLogin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    return inject(PermissionsService).canActivate();
};
