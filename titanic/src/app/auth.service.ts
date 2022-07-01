import { Injectable } from '@angular/core';

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
