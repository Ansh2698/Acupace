import { TestBed } from '@angular/core/testing';

import { WebServiceService } from './web-service.service';

describe('WebService1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebServiceService = TestBed.get(WebServiceService);
    expect(service).toBeTruthy();
  });
});
