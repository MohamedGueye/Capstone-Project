import { TestBed } from '@angular/core/testing';

import { ContingentBeneficiaryDetailsService } from './contingent-beneficiary-details.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MOCK_ACCOUNT_NUMBER } from '../__mocks__/account.mock';
import { MOCK_CONTINGENT_BENEFICIARY_RESPONSE } from '../__mocks__/contingent-bene.mock';

describe('ContingentBeneficiaryDetailsService', () => {
  let service: ContingentBeneficiaryDetailsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContingentBeneficiaryDetailsService]
    });
    service = TestBed.inject(ContingentBeneficiaryDetailsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should call retrieveContingentBeneficiaryDetails api', () => {
    service.retrieveContingentBeneficiaryDetails(MOCK_ACCOUNT_NUMBER)
      .subscribe((res) => {
        expect(res).toEqual(MOCK_CONTINGENT_BENEFICIARY_RESPONSE);
      });
    const req = httpMock.expectOne((httpReq) => 
      httpReq.url.includes('/contingentBeneficiary')
    );
    expect(req.request.method).toEqual('GET');
    req.flush(MOCK_CONTINGENT_BENEFICIARY_RESPONSE);
  });
});
