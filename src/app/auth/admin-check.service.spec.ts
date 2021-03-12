import { TestBed } from '@angular/core/testing';

import { AdminCheckService } from './admin-check.service';

describe('AdminCheckService', () => {
  let service: AdminCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
