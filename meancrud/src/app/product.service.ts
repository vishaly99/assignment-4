import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //readonly url="https://localhost:3000";
  uri = 'http://localhost:3000/product';
  constructor(private http:HttpClient) { }

  getproduct():Observable<any[]>
  {
    return this.http.get<any>(this.uri);
  }
  addproduct(name:string,price:number,qty:number)
  {
    var objdata={
      productname:name,
      price:price,
      qty:qty
    }
    console.warn(objdata);
    return this.http.post(this.uri,objdata);
  }
  deleteproduct(id:any)
  {
    return this.http.delete(`${this.uri}/${id}`);
  }
  editProduct(id:any)
  {
    return this.http.get(`${this.uri}/${id}`);
  }
  updateProduct(val:any)
  {
    return this.http.put(`${this.uri}/${val._id}}`,val);
  }
}
