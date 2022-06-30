import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggin() : boolean{
    return env.isLoggin;
  }
  isName() : string {
    return env.isName;
  }
}
