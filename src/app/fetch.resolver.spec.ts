import { TestBed } from '@angular/core/testing';

import { FetchResolver } from './fetch.resolver';

describe('FetchResolver', () => {
  let resolver: FetchResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FetchResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
