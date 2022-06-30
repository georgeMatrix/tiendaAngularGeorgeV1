import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Producto} from '../models/producto';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
private urlEndPoint = 'http://localhost:8080/producto';
  constructor(private httpClient: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(productos => productos as Producto[])
    );
  }

}
