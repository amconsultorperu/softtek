import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoggedUserModel } from './logged-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = environment.apiUrl;
  loggedUserSubject: BehaviorSubject<LoggedUserModel>;
  loggedUser: LoggedUserModel;

  constructor(private http: HttpClient) {
    this.loggedUserSubject = new BehaviorSubject(this.loggedUser);
  }

  isAuthenticated() {
    // var user: any = JSON.parse(localStorage.getItem('user'));
    // if(user == null)
    //   this.loggedUserSubject.next(null);
    // else
    //   this.setCurrentUser(user);
    // return this.loggedUserSubject.asObservable();
  }

  signin(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((user: any) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.loggedUser = user;
          this.loggedUserSubject.next(this.loggedUser);
        }
      })
    );
  }

  // logout(): Observable<any> {
  //   this.loggedUser = null;
  //   // your log out logic should go here
  //   localStorage.removeItem('user');
  //   this.loggedUserSubject.next(this.loggedUser);
  //   return of(true);
  // }

  setCurrentUser(user: any) {
    this.loggedUserSubject.next(user);
  }
}