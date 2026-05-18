import { TestBed } from '@angular/core/testing';

import { ServiceMission } from './service-mission';

describe('ServiceMission', () => {
  let service: ServiceMission;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMission);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
