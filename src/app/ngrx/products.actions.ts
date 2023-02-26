import {Action} from "@ngrx/store";
import {Product} from "../models/product.model";

export enum ProductsActionTypes {
  /* get All Products */
  GET_ALL_PRODUCTS = '[Products] Get All products',
  GET_ALL_PRODUCTS_SUCCESS = '[Products] Get All products sucess',
  GET_ALL_PRODUCTS_ERROR = '[Products] Get All products error',

  /* get Select Product */
  GET_SELECTED_PRODUCTS = '[Products] Get Selected products',
  GET_SELECTED_PRODUCTS_SUCCESS = '[Products] Get Selected products sucess',
  GET_SELECTED_PRODUCTS_ERROR = '[Products] Get Selected products error',

  /* get Search Product */
  SEARCH_PRODUCTS = '[Products] Search products',
  SEARCH_PRODUCTS_SUCCESS = '[Products] Searchproducts sucess',
  SEARCH_PRODUCTS_ERROR = '[Products] Search products error',
}



/* get ALL Product Actions */
export class GetAllProductAction implements Action {
  type: ProductsActionTypes = ProductsActionTypes.GET_ALL_PRODUCTS;
  constructor(public payload: any) {}
}

export class GetAllProductActionSuccess implements Action {
  type: ProductsActionTypes = ProductsActionTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class GetAllProductActionError implements Action {
  type: ProductsActionTypes = ProductsActionTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

/* get Selected Product Actions */
export class GetSelectedProductAction implements Action {
  type: ProductsActionTypes = ProductsActionTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload: any) {}
}

export class GetSelectedProductActionSuccess implements Action {
  type: ProductsActionTypes = ProductsActionTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class GetSelectedProductActionError implements Action {
  type: ProductsActionTypes = ProductsActionTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

/* Search Product Actions */
export class SearchProductAction implements Action {
  type: ProductsActionTypes = ProductsActionTypes.SEARCH_PRODUCTS;
  constructor(public payload: any) {}
}

export class SearchProductActionSuccess implements Action {
  type: ProductsActionTypes = ProductsActionTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class SearchProductActionError implements Action {
  type: ProductsActionTypes = ProductsActionTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

export type ProductActions =
  GetAllProductAction | GetAllProductActionSuccess | GetAllProductActionError
  | GetSelectedProductAction | GetSelectedProductActionSuccess | GetSelectedProductActionError
  | SearchProductAction | SearchProductActionSuccess | SearchProductActionError
  ;