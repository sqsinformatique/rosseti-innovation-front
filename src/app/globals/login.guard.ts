import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()

export class LoginGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate() {
    if (localStorage.auth) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
    }
    return false;
  }
}
