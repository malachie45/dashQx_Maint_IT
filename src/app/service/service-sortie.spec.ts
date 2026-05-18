import { TestBed } from '@angular/core/testing';

import { ServiceSortie } from './service-sortie';

describe('ServiceSortie', () => {
  let service: ServiceSortie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSortie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
