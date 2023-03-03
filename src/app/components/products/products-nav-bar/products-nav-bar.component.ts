import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {GetAllProductAction, GetSelectedProductAction, SearchProductAction} from "../../../ngrx/products.actions";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent {

  constructor(private store: Store<any>) {
  }
  onGetAllProducts() {
    this.store.dispatch(new GetAllProductAction({}));
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductAction({}))
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchProductAction(dataForm.keyword))
  }

  onNewProduct() {

  }
}
