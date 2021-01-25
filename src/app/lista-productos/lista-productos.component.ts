import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[];
  @Input() comprados: boolean;

  @Output() borrarProducto: EventEmitter<Producto>;

  constructor() {
    this.borrarProducto = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(indice) {
    let elementoBorrado = this.productos.splice(indice, 1)[0];
    this.borrarProducto.emit(elementoBorrado);
  }

}
