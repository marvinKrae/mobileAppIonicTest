import { TestBed } from '@angular/core/testing';

import { BackendCommunicatorService } from './backend-communicator.service';

describe('BackendCommunicatorService', () => {
  let service: BackendCommunicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendCommunicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
