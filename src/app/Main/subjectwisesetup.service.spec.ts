import { TestBed } from '@angular/core/testing';

import { SubjectwisesetupService } from './subjectwisesetup.service';

describe('SubjectwisesetupService', () => {
  let service: SubjectwisesetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectwisesetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
