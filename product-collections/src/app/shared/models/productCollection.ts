import { Entity } from './Entity';
export class ProductCollection extends Entity {
    Id: number;
    SubTypeCode: string;
    CompanyId: number;
    StatusCode: string;
    BussinessLevelCode: string;
    UserId: number;
    Description: string;
    Name: string;
    MediaId: number;
    MediaPath: string;
    UserdOnCompanyStore: boolean;
    ProductCount: number;
    WebsiteCout: number;
    DisplaySequence: number;
    IsVisible: boolean;
    IsSelected: boolean = false;
    Websites: [{
        Application_Id: number,
        Domain_Name: string
    }];
    CompanyStore: [{
        Application_Id: number,
        Domain_Name: string
    }]


    deserialize(productCollection: ProductCollection): ProductCollection {
        Object.assign(this, productCollection);
        return this;
    };
}