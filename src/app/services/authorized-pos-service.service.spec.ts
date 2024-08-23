import { TestBed } from '@angular/core/testing';

import { AuthorizedPosServiceService } from './authorized-pos-service.service';

describe('AuthorizedPosServiceService', () => {
  let service: AuthorizedPosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizedPosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
