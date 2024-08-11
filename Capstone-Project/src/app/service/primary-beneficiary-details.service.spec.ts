import { TestBed } from '@angular/core/testing';

import { PrimaryBeneficiaryDetailsService } from './primary-beneficiary-details.service';

describe('BeneficiaryDetailsService', () => {
  let service: PrimaryBeneficiaryDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimaryBeneficiaryDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
