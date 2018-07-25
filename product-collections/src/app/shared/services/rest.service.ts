import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import { Entity } from '../models/Entity';
@Injectable({
  providedIn: 'root'
})
export abstract class RestService<T> {

  constructor(protected http: HttpClient) { }
  abstract getUri(): string;
  abstract getInstance(): Entity;
  getAll(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`${this.getUri()}`).pipe(map((response)=>{
      return response;
    }));
  }
}
