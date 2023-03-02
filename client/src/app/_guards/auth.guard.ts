import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService) {}

  canActivate(): Observable<boolean> {
    // @ts-ignore: Object is possibly 'null'.
    return this.authService.isAuthenticated().pipe(
      map((user) => {
        if (user) return true;

        return false;
      })
    );
  }
}
