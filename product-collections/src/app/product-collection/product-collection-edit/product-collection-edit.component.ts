import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DragScrollDirective} from 'ngx-drag-scroll';
import { } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ProductCollection } from '../../shared/models/productCollection';
import { ProductCollectionEditView } from '../models/pc-edit.view.model';
@Component({
  selector: 'app-product-collection-edit',
  templateUrl: './product-collection-edit.component.html',
  styleUrls: ['./product-collection-edit.component.scss'] 
})
export class ProductCollectionEditComponent extends ProductCollectionEditView implements OnInit {
  imgSrc: string;
  productDetailForm: FormGroup = this.productDetail();  
  isSelectedImage:boolean; 
  constructor(private _activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder) {
    super();
    this._activatedRoute.queryParams.subscribe((response) => {
      console.log(response.isGlobal);
      this.isGlobal = response.isGlobal === 'true';
    });   
  }

  ngOnInit() {
    this.imgSrc = 'assets/images/1.jpg';
    this.mediaPath = 'assets/images/';
    this.productCollectionName = "April Practice Collections";
    this.propHeader = 'Properties';
    this.collectionName = "Collection Name";
    this.productLevels = ['presonal', 'personal Shared', 'Company'];
    this.imageHeader = 'Default Image';
    this.imageDesc = 'This image will appear Iorem ipsum dolor';
    let i = 1;
    this.mediaCollection = [];
    let mediapath = '';
    while(i<=24){
     mediapath = this.mediaPath+i+'.jpg'
     this.isSelectedImage = this.isSelectedImage === undefined ? true : false;     
      this.mediaCollection.push({isSelectedImage: this.isSelectedImage, mediaPath: mediapath, media_ID: i});
      i++;
    }  
  }
  productDetail() {
    return this._formBuilder.group({
      collectionName: ['', [Validators.required]],
      collectionLevel: ['', [Validators.required]],
      description: ['', []]
    });
  }
  onLevelChange() {

  }  
}
