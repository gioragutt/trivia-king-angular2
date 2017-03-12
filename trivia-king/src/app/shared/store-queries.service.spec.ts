import { TestBed, inject } from '@angular/core/testing';

import { StoreQueriesService } from './store-queries.service';

describe('StoreQueriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreQueriesService]
    });
  });

  it('should ...', inject([StoreQueriesService], (service: StoreQueriesService) => {
    expect(service).toBeTruthy();
  }));
});
