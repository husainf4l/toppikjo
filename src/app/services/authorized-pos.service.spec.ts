import { TestBed } from '@angular/core/testing';

import { AuthorizedPosService } from './authorized-pos.service';

describe('AuthorizedPosService', () => {
  let service: AuthorizedPosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizedPosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
