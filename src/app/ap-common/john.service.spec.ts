import { TestBed } from '@angular/core/testing';

import { JohnService } from './john.service';

describe('JohnService', () => {
  let service: JohnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JohnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
