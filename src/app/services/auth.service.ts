import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { JwtHelperService } from '@auth0/angular-jwt'



@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpService) { }


  onLogOut(e) {
    e.stopPropagation();
    localStorage.removeItem('x-auth-token');
  }

  onRegister(name: string, password: string, email: string) {
    let user = {
      name: name,
      password: password,
      email: email
    }

    return this.http.register(user)

  }

  onLogin(name: string, password: string) {
    let user = {
      email: name,
      password: password
    }

    return this.http.login(user)
  }

  isLoggedIn() {

    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('x-auth-token')
    if (!token) {
      return false;
    }
    let isExpired = jwtHelper.isTokenExpired(token);
    return !isExpired;
  }

  get currentUser() {
    let token = localStorage.getItem('x-auth-token');
    if (!token) return null;

    return new JwtHelperService().decodeToken(token);
  }




}
