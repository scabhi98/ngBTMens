import { TestBed } from '@angular/core/testing';

import { NaaradService } from './naarad.service';

describe('NaaradService', () => {
  let service: NaaradService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaaradService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
