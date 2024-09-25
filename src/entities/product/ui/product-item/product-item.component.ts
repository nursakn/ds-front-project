import {Component, ContentChild, Input, OnInit, TemplateRef,} from '@angular/core';
import {Product} from "../../product.model";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgTemplateOutlet,
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit {
  @Input({ required: true }) product!: Product;

  @ContentChild(
    'productItemAction',
    { read: TemplateRef }
  ) productItemAction: TemplateRef<unknown> | null = null;

  ngOnInit() {
    console.log(this.product);
  }
}
