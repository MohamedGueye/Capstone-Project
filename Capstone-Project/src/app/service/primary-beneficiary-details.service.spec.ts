import { TestBed } from '@angular/core/testing';

import { PrimaryBeneficiaryDetailsService } from './primary-beneficiary-details.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MOCK_ACCOUNT_NUMBER } from '../__mocks__/account.mock';
import { MOCK_PRIMARY_BENEFICIARY_RESPONSE } from '../__mocks__/primary-bene.mock';

describe('BeneficiaryDetailsService', () => {
  let service: PrimaryBeneficiaryDetailsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PrimaryBeneficiaryDetailsService]
    });
    service = TestBed.inject(PrimaryBeneficiaryDetailsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should call retrievePrimaryBeneficiaryDetails api', () => {
    service.retrievePrimaryBeneficiaryDetails(MOCK_ACCOUNT_NUMBER)
      .subscribe((res) => {
        expect(res).toEqual(MOCK_PRIMARY_BENEFICIARY_RESPONSE);
      });
    const req = httpMock.expectOne((httpReq) => 
      httpReq.url.includes('/primaryBeneficiary')
    );
    expect(req.request.method).toEqual('GET');
    req.flush(MOCK_PRIMARY_BENEFICIARY_RESPONSE);
  });
});
