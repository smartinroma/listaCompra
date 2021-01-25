import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() productoCreado = new EventEmitter<Producto>();

  nuevoProducto: Producto;

  constructor() {
    this.productoCreado = new EventEmitter();
    this.nuevoProducto = {}
  }

  ngOnInit(): void {
  }

  onClick() {
    //this.productoAgregado = {};
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto = {}//limpia los campos de texto, crea un nuevo objeto y asi no se duplica

  }

}
