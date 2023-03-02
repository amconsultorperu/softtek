import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
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
    const userString = localStorage.getItem('user');
    if (!userString) {
      this.loggedUserSubject.next({ username: '', token: '' });
      return this.loggedUserSubject.asObservable();
    }

    const user: User = JSON.parse(userString);

    this.setCurrentUser(user);
    return this.loggedUserSubject.asObservable();
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

  setCurrentUser(user: any) {
    this.loggedUserSubject.next(user);
  }
}
