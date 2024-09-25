import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductListComponent} from "../../entities/product/ui/product-list/product-list.component";
import {ProductService} from "../../entities/product/product.service";
import {Product, ProductList} from "../../entities/product/product.model";
import {ProductItemComponent} from "../../entities/product/ui/product-item/product-item.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ProductListComponent,
    ProductItemComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  products: ProductList = [];

  constructor(private productsService: ProductService) {}

  ngOnInit() {
    this.productsService
      .getProducts()
      .subscribe(products => { this.products = products });
  }

  addToCart(product: Product) {
    console.log('Adding to cart', product);
  }
}
