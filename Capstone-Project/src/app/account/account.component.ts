import { Component } from '@angular/core';
import { OverlayComponent } from '../overlay/overlay.component';
import { BannerComponent } from '../banner/banner.component';
import { AccountService } from './account.service';
import { async } from 'rxjs';
import { Customer } from '../models/customer.model';
import { BeneficiaryComponent } from '../beneficiary/beneficiary.component';
import { CommoditiesComponent } from '../commodities/commodities.component';
import { BusinessesComponent } from '../businesses/businesses.component';
import { RealEstateComponent } from '../real-estate/real-estate.component';
import { StocksComponent } from '../stocks/stocks.component';
import { PrimaryBeneficiary } from '../models/primary-beneficiary.model';
import { PrimaryBeneficiaryDetailsService } from '../service/primary-beneficiary-details.service';
import { ContingentBeneficiaryDetailsService } from '../service/contingent-beneficiary-details.service';
import { ContingentBeneficiary } from '../models/contingent-beneficiary.model';
import { getAccountOverlayAndBannerError } from '../utils/account-error.utils';
import { ACCOUNT_ERROR_TYPES, BENE_ERROR_TYPES } from '../constants/error-types.constants';
import { AppError } from '../models/app-error.model';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-account-root',
  standalone: true,
  imports: [BeneficiaryComponent, CommoditiesComponent, BusinessesComponent, RealEstateComponent, StocksComponent, OverlayComponent, NgIf],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  customerDetails: Customer | undefined;
  primaryBeneficiary: PrimaryBeneficiary | undefined;
  contingentBeneficiary: ContingentBeneficiary | undefined;
  accountOverlayError?: AppError = undefined;
  beneOverlayError?: AppError = undefined;
  constructor(private accountService: AccountService, 
    private primaryBeneficiaryService: PrimaryBeneficiaryDetailsService,
    private contingentBeneficiaryService: ContingentBeneficiaryDetailsService) {}
  
  onSearchUpdate(searchedAccount: string) {
    if(searchedAccount) {
      this.accountService.retrieveCustomerDetails(searchedAccount).subscribe({
        next: async (data: Customer) => {
          this.customerDetails = data;
        },
        error: (error) => {
          const errorType = getAccountOverlayAndBannerError(error, ACCOUNT_ERROR_TYPES);

          if (error?.error?.status === 500) {
            this.accountOverlayError = ACCOUNT_ERROR_TYPES[500];
          }
        }
      })
      this.primaryBeneficiaryService.retrievePrimaryBeneficiaryDetails(searchedAccount).subscribe({
        next: async (data: PrimaryBeneficiary) => {
          this.primaryBeneficiary = data;
        }
      })
      this.contingentBeneficiaryService.retrieveContingentBeneficiaryDetails(searchedAccount).subscribe({
        next: async (data: ContingentBeneficiary) => {
          this.contingentBeneficiary = data;
        },
        error: (error) => {
          const errorType = getAccountOverlayAndBannerError(error, BENE_ERROR_TYPES);

          if (error?.error?.status === 500) {
           this.beneOverlayError = BENE_ERROR_TYPES[500]; 
          }
        }
      })
    }
  }
}
