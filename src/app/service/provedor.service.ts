import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Provedor} from '../models/provedor';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {
private urlEndPoint = 'http://localhost:8080/provedor';
  constructor(private httpClient: HttpClient) { }
  getProvedor(): Observable<Provedor[]>{
  return this.httpClient.get(this.urlEndPoint).pipe(
    map(provedor => provedor as Provedor[])
  );
  }
}
