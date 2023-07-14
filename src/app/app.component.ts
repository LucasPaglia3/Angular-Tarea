import { Component } from '@angular/core';

type Product = {
  name: string,
  cost: string,
  emoji: string,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    {name: 'Mouse', cost: '$12500', emoji: '🖱️'},
    {name: 'Teclado', cost: '$20000', emoji: '⌨️'},
    {name: 'Monitor', cost: '$200000', emoji: '🖥️'},
    {name: 'Auriculares', cost: '$50000', emoji: '🎧'},
  ];

  bShowProducts: boolean = false; // Si es false, no muestra los productos.

  toggleProducts() { // Cuando se llama a la función, cambia bShowProducts a true o false.
    this.bShowProducts = !this.bShowProducts;
  }
}
