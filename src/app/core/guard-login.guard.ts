import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
class PermissionsService {
  private token = localStorage.getItem('user_token')

  constructor(private router:Router) {}

  canActivate(): boolean | Promise<boolean> {
    return this.token ? true : this.router.navigate(['auth', 'login'])
  }
}

export const canActivateLogin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    return inject(PermissionsService).canActivate();
};
