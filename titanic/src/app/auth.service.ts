import { Injectable } from '@angular/core';
import { isAuth } from './passengers.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggin() : boolean{
    if (localStorage.getItem('currentUser')) {
      return true
    } else 
    return false;
  }
}
