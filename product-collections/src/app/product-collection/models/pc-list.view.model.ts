import * as _Product from '../constants/product-constant';
import { ColumnName } from '../interfaces/ColumnName';
export class ProductCollectionListView {
    levels: Array<string> = _Product.constant.levels;
    columnName: ColumnName = { ..._Product.constant.columnNames };
    defaultBtn: string = _Product.constant.defaultButton;
    isSeeWebsiteMore: boolean = true;
    isSeeCompanyMore:boolean = true;
    filterNames = { ..._Product.constant.filterNames };
}