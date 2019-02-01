import { TestBed } from '@angular/core/testing';

import { ExpLibService } from './exp-lib.service';

describe('ExpLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpLibService = TestBed.get(ExpLibService);
    expect(service).toBeTruthy();
  });
});
