import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../service/producto.service';
import {Producto} from '../../models/producto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  constructor(private productoService: ProductoService, private router: Router) { }
  private producto: Producto = new Producto();
  ngOnInit(): void {
  }

  public create(): void{
    this.productoService.create(this.producto).subscribe();
  }

}
