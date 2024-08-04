import { TestBed } from '@angular/core/testing';

import { FetchRecipeResolver } from './fetchrecipe.resolver';

describe('FetchrecipeResolver', () => {
  let resolver: FetchRecipeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FetchRecipeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
