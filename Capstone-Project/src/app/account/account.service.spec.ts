import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MOCK_ACCOUNT, MOCK_ACCOUNT_NUMBER } from '../__mocks__/account.mock';

describe('AccountService', () => {
  let service: AccountService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService]
    });
    service = TestBed.inject(AccountService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should call retrieveCustomerDetails api', () => {
    service.retrieveCustomerDetails(MOCK_ACCOUNT_NUMBER)
      .subscribe((res) => {
        expect(res).toEqual(MOCK_ACCOUNT);
      });
    const req = httpMock.expectOne((httpReq) => 
      httpReq.url.includes('/customer')
    );
    expect(req.request.method).toEqual('GET');
    req.flush(MOCK_ACCOUNT);
  });
});
