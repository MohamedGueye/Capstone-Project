import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { MOCK_ACCOUNT, MOCK_ACCOUNT_NUMBER } from '../__mocks__/account.mock';
import { AccountService } from './account.service';
import { of } from 'rxjs';
import { PrimaryBeneficiaryDetailsService } from '../service/primary-beneficiary-details.service';
import { ContingentBeneficiaryDetailsService } from '../service/contingent-beneficiary-details.service';
import { MOCK_PRIMARY_BENEFICIARY_RESPONSE } from '../__mocks__/primary-bene.mock';
import { MOCK_CONTINGENT_BENEFICIARY_RESPONSE } from '../__mocks__/contingent-bene.mock';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call onSearchedUpdate with account number', () => {
    const customerService = TestBed.inject(AccountService);
    const primaryBeneService = TestBed.inject(PrimaryBeneficiaryDetailsService);
    const contingentBeneService = TestBed.inject(ContingentBeneficiaryDetailsService);
    spyOn(customerService, 'retrieveCustomerDetails').and.returnValue(of(MOCK_ACCOUNT));
    spyOn(primaryBeneService, 'retrievePrimaryBeneficiaryDetails').and.returnValue(of(MOCK_PRIMARY_BENEFICIARY_RESPONSE));
    spyOn(contingentBeneService, 'retrieveContingentBeneficiaryDetails').and.returnValue(of(MOCK_CONTINGENT_BENEFICIARY_RESPONSE));

    component.onSearchUpdate(MOCK_ACCOUNT_NUMBER);
    expect(customerService.retrieveCustomerDetails).toHaveBeenCalledWith(MOCK_ACCOUNT_NUMBER);
    expect(primaryBeneService.retrievePrimaryBeneficiaryDetails).toHaveBeenCalledWith(MOCK_ACCOUNT_NUMBER);
    expect(contingentBeneService.retrieveContingentBeneficiaryDetails).toHaveBeenCalledWith(MOCK_ACCOUNT_NUMBER);
  });
});
