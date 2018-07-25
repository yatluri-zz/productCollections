import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ProductCollectionService } from './services/product-collection.service';
import { ProductCollection } from '../shared/models/productCollection';
import { Websites } from './interfaces/Wesites';
import { LoadMore } from './interfaces/LoadMore';
import { ProductCollectionActionMethods } from './interfaces/ProductCollectio.ActionMethods';

import * as _Product from './constants/product-constant'
import * as _ from 'lodash';
@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.scss']
})
export class ProductCollectionComponent implements OnInit {
  isGlobal: boolean;
  productHeader: string;
  productCollection: Array<ProductCollection>
  websiteCollection: Array<Websites>;
  websitesCollectionTemp: Array<Websites> = [];
  companyStoreCollection: Array<Websites>;
  companyStoreCollectionTemp: Array<Websites> = [];
  renderTable: boolean = false;
  btnPrimaryText: string;
  constructor(private _route: Router, private _location: Location, private http: ProductCollectionService) {
    console.log(_route.url);
    console.log(_location.isCurrentPathEqualTo(_Product.constant.path.global));
    this.isGlobal = _location.isCurrentPathEqualTo(_Product.constant.path.global);
  }

  ngOnInit() {
    if (this.isGlobal) {
      this.productHeader = _Product.constant.Headers.globalHeader;
      this.http.getAll().subscribe((response: ProductCollection[]) => {
        if (response) {
          console.log(response);
          this.productCollection = [...response['productCollection']];
          this.websiteCollection = _.take(response['websites'], 5);
          this.websitesCollectionTemp.push(...response['websites']);
          this.companyStoreCollection = _.take(response['companyStore'], 5);
          this.companyStoreCollectionTemp.push(...response['companyStore']);
          this.btnPrimaryText = _Product.constant.btnText.global;
        }
      });
    } else {
      this.productHeader = _Product.constant.Headers.storeHeader;
      this.btnPrimaryText = _Product.constant.btnText.store;
      this.http.getAll().subscribe((response: ProductCollection[]) => {
        if (response) {
          console.log(response);
          this.productCollection = [...response['productCollection']];
          this.websiteCollection = _.take(response['websites'], 5);
          this.websitesCollectionTemp.push(...response['websites']);
          this.companyStoreCollection = _.take(response['companyStore'], 5);
          this.companyStoreCollectionTemp.push(...response['companyStore']);
          this.btnPrimaryText = _Product.constant.btnText.global;
          this.renderTable = true;
        }
      });
    }
  }
  onSeeMore($event: LoadMore) {
    if (this.isGlobal) {
      if ($event) {
        switch ($event.filterName) {
          case _Product.constant.filterNames.website:
            if (!$event.isSeeMore) {
              console.log($event.isSeeMore);
              this.websiteCollection = [...this.websitesCollectionTemp];
            } else {
              this.websiteCollection.length === this.websitesCollectionTemp.length ? this.websiteCollection = _.take(this.websiteCollection, 5) :
                this.websiteCollection = _.take(this.websitesCollectionTemp, 5);
            }
            break;
          case _Product.constant.filterNames.company:
            if (!$event.isSeeMore) {
              console.log($event);
              this.companyStoreCollection = [...this.companyStoreCollectionTemp];
            } else {
              this.companyStoreCollection.length === this.companyStoreCollectionTemp.length ? this.companyStoreCollection = _.take(this.companyStoreCollection, 5) :
                this.companyStoreCollection = _.take(this.companyStoreCollectionTemp, 5);
            }
            break;
          default:
            console.log('nothing happened');
            break;
        }
      }
    }
  }
  selectedAction($event: ProductCollectionActionMethods) {
    if (this.isGlobal) {
      const queryParams: NavigationExtras = {
        queryParams: {
          "id": $event.productCollection.Id,
          "isGlobal": this.isGlobal
        }
      }
      this._route.navigate(['productCollectionEdit'], queryParams);
      console.log(this._route.navigated);
    }
  }

}
