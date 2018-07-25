import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductCollectionListView } from '../models/pc-list.view.model';
import { ProductCollection } from '../../shared/models/productCollection';
import { Websites } from '../interfaces/Wesites';
import { LoadMore } from '../interfaces/LoadMore';
import { ProductCollectionActionMethods } from '../interfaces/ProductCollectio.ActionMethods';
import {SortItemIndex} from '../interfaces/SortItemIndex';
import {SortItems} from '../interfaces/SortItems';
import * as _Product from '../constants/product-constant';
import * as _  from 'lodash';
@Component({
  selector: 'app-product-collection-list',
  templateUrl: './product-collection-list.component.html',
  styleUrls: ['./product-collection-list.component.scss']
})
export class ProductCollectionListComponent extends ProductCollectionListView implements OnInit {
  @Input() headerString: string;
  @Input() btnPrimaryText: string;
  @Input() productCollections: Array<ProductCollection>;
  @Input() websites: Array<Websites>;
  @Input() companyStores: Array<Websites>;
  @Input() isGlobal: boolean;
  @Input() renderTable: boolean;
  @Output() loadMoreWebsites: EventEmitter<LoadMore> = new EventEmitter<LoadMore>();
  @Output() productCollectionAction: EventEmitter<ProductCollectionActionMethods> = new EventEmitter<ProductCollectionActionMethods>();
  temp_data: Array<ProductCollection> = [];
	selectedArrayList: Array<ProductCollection> = [];
	afterSort: SortItemIndex = {
		productId: null,
		currentIndex: null,
		previousIndex: null
	};
  constructor() {
    super();
  }

  ngOnInit() {
    console.log(this.columnName);
    setTimeout(()=>{
      this.temp_data.push(...this.productCollections);
    },3000);
  }
  onSeeMore(filterName: string) {
    if (this.isGlobal) {
      filterName === _Product.constant.filterNames.website ? this.isSeeWebsiteMore = !this.isSeeWebsiteMore : this.isSeeCompanyMore = !this.isSeeCompanyMore;
      console.log(filterName);
      const seeMoreObject: LoadMore = {
        filterName: filterName,
        isSeeMore: filterName === _Product.constant.filterNames.website ? this.isSeeWebsiteMore : this.isSeeCompanyMore
      }
      this.loadMoreWebsites.emit(seeMoreObject);
    }
  }

  onSelectedAction(action: string, row: ProductCollection) {
    if (action) {
      const actionMethods: ProductCollectionActionMethods = {
        actionName: action,
        productCollection: row
      };
      this.productCollectionAction.emit(actionMethods);
    }
  }
  onDrop($event: SortItems) {
		// ngx-datatable recommends you force change detection		
		if ($event) {
      const sortData:Array<ProductCollection> = [...$event.dragulaModel];
      console.log($event.dataSet);
			if (_.isEqual(this.productCollections, sortData)) {
        console.log(this.temp_data);
				this.afterSort.previousIndex = _.findIndex(this.temp_data, (c) => {          
					return c.Id === parseInt($event.dataSet.productid);
				});
				this.afterSort.productId = parseInt($event.dataSet.productid);
				this.afterSort.currentIndex = _.findIndex(this.productCollections, (c) => {
					return c.Id === parseInt($event.dataSet.productid);
				});
			}
			this.temp_data.length = 0;
			this.temp_data.push(...this.productCollections);
		}
	}

	onDrag(event) {
		console.log('DRAG event::', event);
	}


}
