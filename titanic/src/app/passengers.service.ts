import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';
import { map, filter  } from 'rxjs/operators';
import { Passenger } from './model';


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
}
