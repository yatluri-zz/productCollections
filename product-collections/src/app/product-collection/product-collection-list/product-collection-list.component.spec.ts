import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCollectionListComponent } from './product-collection-list.component';

describe('ProductCollectionListComponent', () => {
  let component: ProductCollectionListComponent;
  let fixture: ComponentFixture<ProductCollectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCollectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
