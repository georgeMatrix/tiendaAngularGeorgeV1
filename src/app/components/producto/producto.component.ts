import { Component, OnInit } from '@angular/core';
import {Producto} from '../../models/producto';
import {ProductoService} from '../../service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(producto => {
      this.producto = producto;
      console.log(this.producto);
      }
    );
  }

}
