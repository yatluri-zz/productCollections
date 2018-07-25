import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestService} from '../../shared/services/rest.service';
import {ProductCollection} from '../../shared/models/productCollection';
@Injectable({
  providedIn: 'root'
})
export class ProductCollectionService extends RestService<ProductCollection>  {

  constructor(protected http:HttpClient) {
    super(http);
   }
   getUri():string{
   return 'assets/json/product-collections.json';
   }
   getInstance(){
   return new ProductCollection();
   }
}
