import { Component, OnInit } from '@angular/core';
import {ProvedorService} from '../../service/provedor.service';
import {Provedor} from '../../models/provedor';

@Component({
  selector: 'app-provedor',
  templateUrl: './provedor.component.html',
  styleUrls: ['./provedor.component.css']
})
export class ProvedorComponent implements OnInit {
  provedor: Provedor[];
  constructor(private productoService: ProvedorService) { }

  ngOnInit(): void {
    this.productoService.getProvedor().subscribe(provedor => {
      this.provedor = provedor;
      console.log(this.provedor);
    });
  }

}
