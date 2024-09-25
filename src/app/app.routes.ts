import { Routes } from '@angular/router';
import { HomePageComponent } from "../pages/home-page/home-page.component";
import {ProductService} from "../entities/product/product.service";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    providers: [ProductService]
  }
];
