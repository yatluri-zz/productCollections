import { TestBed, inject } from '@angular/core/testing';

import { ProductCollectionService } from './product-collection.service';

describe('ProductCollectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCollectionService]
    });
  });

  it('should be created', inject([ProductCollectionService], (service: ProductCollectionService) => {
    expect(service).toBeTruthy();
  }));
});
