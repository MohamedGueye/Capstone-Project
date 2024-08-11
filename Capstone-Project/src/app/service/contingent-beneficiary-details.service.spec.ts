import { TestBed } from '@angular/core/testing';

import { ContingentBeneficiaryDetailsService } from './contingent-beneficiary-details.service';

describe('ContingentBeneficiaryDetailsService', () => {
  let service: ContingentBeneficiaryDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContingentBeneficiaryDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
