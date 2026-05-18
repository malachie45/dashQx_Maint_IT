import { TestBed } from '@angular/core/testing';

import { ServiceEqpt } from './service-eqpt';

describe('ServiceEqpt', () => {
  let service: ServiceEqpt;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEqpt);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
