import {Injectable} from "@angular/core";
import {ProductService} from "../services/product.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  GetAllProductActionError,
  GetAllProductActionSuccess,
  GetSelectedProductActionError,
  GetSelectedProductActionSuccess,
  ProductActions,
  ProductsActionTypes,
  SearchProductActionError,
  SearchProductActionSuccess,
  SelectProductActionError,
  SelectProductActionSuccess
} from "./products.actions";
import {Product} from "../models/product.model";


@Injectable()
export class ProductsEffects {

  constructor(private productService: ProductService,
              private effectAction: Actions) {

  }


  getAllProductsEffect: Observable<ProductActions> = createEffect(() => {
    return this.effectAction.pipe(
      ofType(ProductsActionTypes.GET_ALL_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productService.getProducts()
          .pipe(
            map((products: Product[]) => new GetAllProductActionSuccess(products)),
            catchError(err => of(new GetAllProductActionError(err.message)))
          )
      })
    );
  });

  /* Get Selected Products*/
  getSelectedProductsEffect: Observable<ProductActions> = createEffect(() => {
    return this.effectAction.pipe(
      ofType(ProductsActionTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productService.getSelectedProducts()
          .pipe(
            map((products: Product[]) => new GetSelectedProductActionSuccess(products)),
            catchError(err => of(new GetSelectedProductActionError(err.message)))
          )
      })
    );
  });

  /* Get Selected Products*/
  SearchProductsEffect: Observable<ProductActions> = createEffect(() => {
    return this.effectAction.pipe(
      ofType(ProductsActionTypes.SEARCH_PRODUCTS),
      mergeMap((action: ProductActions) => {
        return this.productService.searchProducts(action.payload)
          .pipe(
            map((products: Product[]) => new SearchProductActionSuccess(products)),
            catchError(err => of(new SearchProductActionError(err.message)))
          )
      })
    );
  });

  /* Selecte Products*/
  SelectProductEffect: Observable<ProductActions> = createEffect(() => {
    return this.effectAction.pipe(
      ofType(ProductsActionTypes.SELECT_PRODUCT),
      mergeMap((action: ProductActions) => {
        return this.productService.setSelected(action.payload)
          .pipe(
            map((product: Product) => new SelectProductActionSuccess(product)),
            catchError(err => of(new SelectProductActionError(err.message)))
          )
      })
    );
  });

}
