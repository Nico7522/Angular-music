import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResult } from '../models/authresult';
import { Login } from '../models/login';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _authUrl = "http://localhost:8080/api/auth/"

  constructor(private _HttpClient: HttpClient) {}

  register(register : Register) : Observable<AuthResult> {
    return this._HttpClient.post<AuthResult>(this._authUrl+"register", register)
  }

  login(login : Login) : Observable<AuthResult> {
    return this._HttpClient.post<AuthResult>(this._authUrl+"login", login)
  }

  logout() : void {}
}
