import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BACKEND} from '../../globals/config';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private token = localStorage.auth || null;

  constructor(private http: HttpClient, private router: Router){}

  getHeader(): HttpHeaders {
    return new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Cookie', `rosseti-session=${this.token}`);
  }

  auth({login, password}): Observable<any> {
    return this.http.post<any>(`${BACKEND}/auth`, {
      user_phone: login,
      user_password: password
    });
  }

  saveUserToken(token) {
    localStorage.setItem('auth', token);
    this.token = token;
  }

  checkLogin() {
    return !!this.token;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }

  getUserByID(token): Observable<any> {
    return this.http.post<any>(`${BACKEND}/users`, {

    });
  }
}

