import { TestBed } from '@angular/core/testing';

import { ServiceEntree } from './service-entree';

describe('ServiceEntree', () => {
  let service: ServiceEntree;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEntree);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
