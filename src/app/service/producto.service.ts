import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Producto} from '../models/producto';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
private urlEndPoint = 'http://localhost:8080/producto';
private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpClient: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(productos => productos as Producto[])
    );
  }
  create(producto: Producto): Observable<Producto>{
    return this.httpClient.post<Producto>(this.urlEndPoint, producto, {headers: this.httpHeaders});
  }
}
