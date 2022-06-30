import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';
import { map, filter  } from 'rxjs/operators';
import { Passenger,User } from './model';
import { UserRegistration } from './model';



@Injectable({
  providedIn: 'root'
})
export class PassengersService {

  constructor(private http : HttpClient) { }

  getPassenger(): Promise<Passenger[]> {
    const isPromise = new Promise<Passenger[]>((resolve, reject) => {
      this.http.get<Passenger[]>("http://localhost:8000/passengers").subscribe(data => {resolve(data)});
    });
    return isPromise;
  }

  getUser(): Promise<User[]> {
    const isPromise = new Promise<User[]>((resolve, reject) => {
      this.http.get<User[]>("http://localhost:8000/users").subscribe(data => {resolve(data)});
    });
    return isPromise;
  }

  getUserSpecific(name: UserRegistration): Promise<User> {
    const isPromise = new Promise<User>((resolve, reject) => {
      this.http.get<User>(`http://localhost:8000/users/${name}`).subscribe(data => {resolve(data)});
    });
    return isPromise;
  }

  getUserSpecificMdp(name: string, password: string): Promise<User> {
    const isPromise = new Promise<User>((resolve, reject) => {
      this.http.get<User>(`http://localhost:8000/users/${name}/${password}`).subscribe(data => {resolve(data)});
    });
    return isPromise;
  }
}
