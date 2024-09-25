import { Component } from '@angular/core';
import {ProductListComponent} from "../../entities/product/ui/product-list/product-list.component";
import {ProductsService} from "../../entities/product/products.service";
import {ProductList} from "../../entities/product/product.model";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ProductListComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  products: ProductList = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .getProducts()
      .subscribe(products => { this.products = products });
  }
}
