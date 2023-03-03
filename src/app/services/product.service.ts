/**
 * @author : Mohamed YOUSSFI, med@youssfi.net,
 * ENSET Mohammedia, Université Hassan II de Casablanca
 *
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from "../models/product.model";

@Injectable({providedIn: 'root'})
export class ProductService {

  host = `http://localhost:3000`;
  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.host + '/products');
    // return throwError("Not Implemented yet");
  }
  public getSelectedProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.host + '/products?selected=true');
  }
  public getAvailableProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.host + '/products?available=true');
  }

  public searchProducts(name: string): Observable<Product[]>{
    return this.http.get<Product[]>(this.host + '/products?name_like=' + name);
  }
  public setSelected(product: Product): Observable<Product>{
    return this.http.put<Product>(this.host + '/products/' + product.id, {...product, selected: !product.selected});
  }
  public delete(id: number): Observable<void>{
    return this.http.delete<void>(this.host + '/products/' + id);
  }
  public save(product: Product): Observable<Product>{
    return this.http.post<Product>(this.host + '/products/', product);
  }
  public update(product: Product): Observable<Product>{
    return this.http.put<Product>(this.host + '/products/' + product.id, product);
  }
  public getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(this.host + '/products/' + id);
  }

}
