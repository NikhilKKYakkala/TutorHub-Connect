import { TestBed } from '@angular/core/testing';

import { EnrollhereService } from './enrollhere.service';

describe('EnrollhereService', () => {
  let service: EnrollhereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollhereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
