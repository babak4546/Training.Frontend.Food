import { TestBed } from '@angular/core/testing';

import { BackendSecurityService } from './backend-security.service';

describe('BackendSecurityService', () => {
  let service: BackendSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
