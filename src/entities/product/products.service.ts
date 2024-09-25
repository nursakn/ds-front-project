import {Injectable} from "@angular/core";
import {ApiService} from "../../shared/api/api.service";
import {ProductList} from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: ApiService) {}

  getProducts() {
    return this.httpClient.get<ProductList>([
      {
        id: '1',
        name: 'Product 1',
        price: 100,
        description: 'Description 1',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: '2',
        name: 'Product 2',
        price: 200,
        description: 'Description 2',
        image: 'https://via.placeholder.com/150'
      }
    ])
  }
}
