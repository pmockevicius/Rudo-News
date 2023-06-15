import { TestBed } from '@angular/core/testing';

import { DBCallsService } from './db-calls.service';

describe('DBCallsService', () => {
  let service: DBCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
