import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {ProductList} from "../../product.model";
import {ProductItemComponent} from "../product-item/product-item.component";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, NgTemplateOutlet],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() products: ProductList = [];

  @ContentChild(
    'productListHeader',
    { read: TemplateRef }
  ) productListHeader: TemplateRef<unknown> | null = null;
  @ContentChild(
    'productListFooter',
    { read: TemplateRef }
  ) productListFooter: TemplateRef<unknown> | null = null;
  @ContentChild(
    'productItem',
    { read: TemplateRef }
  ) productItem: TemplateRef<unknown> | null = null;
}
