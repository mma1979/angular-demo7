import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenModel } from '../models/token-model';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
tokenSubject = new BehaviorSubject<string>( localStorage.getItem('token') || '')
token$ = this.tokenSubject.asObservable()

  constructor() { }

  setToken(token: string){
    this.tokenSubject.next(token)
    localStorage.setItem('token', token)
  }

  isAuthintecated() : boolean{
    let currentToken = this.tokenSubject.value;
    return currentToken.length > 0;
  }

  isUserInRole(role: string) : boolean{
    let token= this.tokenSubject.value;
    let tokeModel: TokenModel = jwtDecode(token);
    return tokeModel.role === role;
  }
}
