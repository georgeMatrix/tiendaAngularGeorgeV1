import {Provedor} from './provedor';

export class Producto {
    idProducto: number;
    nombre: string;
    descripcion: string;
    provedorByIdProvedor: Provedor;
}
