import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.login_url;
  loginpage = environment.login_page;
  homepage = environment.question_url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  user: User = { username: '', alias: '' };
  loggedin = false;
  constructor(private http: HttpClient, private router: Router) {}
  login(user: User): Observable<any> {
    return this.http.post(`${this.url}/login`, user, this.httpOptions).pipe(
      tap((_) => {
        this.loggedin = true;
      }),
      catchError(this.handleError<any>('login'))
    );
  }
  signin(user: User): Observable<any> {
    return this.http.post(`${this.url}/create`, user, this.httpOptions).pipe(
      tap((_) => {
        this.loggedin = true;
      }),
      catchError(this.handleError<any>('login'))
    );
  }
  logout() {
    this.loggedin = false;
    this.router.navigate([this.loginpage]);
  }
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
