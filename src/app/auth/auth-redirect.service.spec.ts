import { TestBed } from '@angular/core/testing';

import { AuthRedirectService } from './auth-redirect.service';

describe('AuthRedirectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthRedirectService = TestBed.get(AuthRedirectService);
    expect(service).toBeTruthy();
  });
});
