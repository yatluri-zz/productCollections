import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCollectionEditComponent } from './product-collection-edit.component';

describe('ProductCollectionEditComponent', () => {
  let component: ProductCollectionEditComponent;
  let fixture: ComponentFixture<ProductCollectionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCollectionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCollectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
