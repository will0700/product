import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  createProduct(product){
    return this._http.post('/api/products', product)
  }

  getProducts(){
    return this._http.get('/api/products')
  }

  getProduct(id){
    return this._http.get('/api/products/' + id)
  }

  updateProduct(id, product){
    return this._http.put('/api/products/' + id, product)
  }

  deleteProduct(id){
    return this._http.delete('/api/products/' + id)
  }
}
