import {Product} from "../models/product.model";
import {
  GetAllProductActionError,
  GetAllProductActionSuccess,
  ProductActions,
  ProductsActionTypes,
  SearchProductActionError,
  SearchProductActionSuccess,
  SelectProductActionError,
  SelectProductActionSuccess
} from "./products.actions";
import {Action} from "@ngrx/store";


export enum ProductStateEnum {
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial'
}
export interface ProductsState {
  products: Product[],
  errorMessage: string,
  dataState: ProductStateEnum
}

const initState: ProductsState = {
  products: [],
  errorMessage: '',
  dataState: ProductStateEnum.INITIAL
}

export function productReducer(state: ProductsState = initState, action: Action): ProductsState {

  switch (action.type) {
    case ProductsActionTypes.GET_ALL_PRODUCTS:
      return {
        ...state!,
        dataState: ProductStateEnum.LOADING
      } ;// on clone le state et on modifie l'attribut dataState
    case ProductsActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state!,
        dataState: ProductStateEnum.LOADED,
        products: (action as GetAllProductActionSuccess).payload
      };
    case ProductsActionTypes.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state!,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (action as GetAllProductActionError).payload
      };

      /* Get Selected Products*/
    case ProductsActionTypes.GET_SELECTED_PRODUCTS:
      return {
        ...state!,
        dataState: ProductStateEnum.LOADING
      } ;// on clone le state et on modifie l'attribut dataState
    case ProductsActionTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {
        ...state!,
        dataState: ProductStateEnum.LOADED,
        products: (action as GetAllProductActionSuccess).payload
      };
    case ProductsActionTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {
        ...state!,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (action as GetAllProductActionError).payload
      };
      /* Search Products*/
    case ProductsActionTypes.SEARCH_PRODUCTS:
      return {
        ...state!,
        dataState: ProductStateEnum.LOADING
      } ;// on clone le state et on modifie l'attribut dataState
    case ProductsActionTypes.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state!,
        dataState: ProductStateEnum.LOADED,
        products: (action as SearchProductActionSuccess).payload
      };
    case ProductsActionTypes.SEARCH_PRODUCTS_ERROR:
      return {
        ...state!,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (action as SearchProductActionError).payload
      };

      /* Select Product*/
    case ProductsActionTypes.SELECT_PRODUCT:
      return {
        ...state!,
        dataState: ProductStateEnum.LOADING
      } ;// on clone le state et on modifie l'attribut dataState
    case ProductsActionTypes.SELECT_PRODUCT_SUCCESS:
      const product = (action as SelectProductActionSuccess).payload;
      const products = state.products.map(p => p.id === product.id ? product : p);
      return {
        ...state!,
        dataState: ProductStateEnum.LOADED,
        products: products
      };
    case ProductsActionTypes.SELECT_PRODUCT_ERROR:
      return {
        ...state!,
        dataState: ProductStateEnum.ERROR,
        errorMessage: (action as SelectProductActionError).payload
      };
    default:
      return state!;
  }


}
