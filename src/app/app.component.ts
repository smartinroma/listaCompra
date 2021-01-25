import { Component } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productosAComprar: Producto[];
  productosComprados: Producto[];

  constructor() {
    this.productosAComprar = []
    this.productosComprados = []

  }

  onProductoCreado($event) {
    this.productosAComprar.push($event);
  }

  onBorrarProducto($event) {
    this.productosComprados.push($event);
  }

  onBorrarProductoV2($event) {
    this.productosAComprar.push($event);
  }
}
