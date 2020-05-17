import { TestBed } from '@angular/core/testing';

import { BugService } from './bug.service';

describe('BugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BugService = TestBed.get(BugService);
    expect(service).toBeTruthy();
  });
});
