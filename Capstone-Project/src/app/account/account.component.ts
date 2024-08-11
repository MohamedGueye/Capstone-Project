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


@Component({
  selector: 'app-account-root',
  standalone: true,
  imports: [BeneficiaryComponent, CommoditiesComponent, BusinessesComponent, RealEstateComponent, StocksComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  customerDetails: Customer | undefined;
  primaryBeneficiary: PrimaryBeneficiary | undefined;
  constructor(private accountService: AccountService, private primaryBeneficiaryService: PrimaryBeneficiaryDetailsService) {}
  
  onSearchUpdate(searchedAccount: string) {
    if(searchedAccount) {
      this.accountService.retrieveCustomerDetails(searchedAccount).subscribe({
        next: async (data: Customer) => {
          this.customerDetails = data;
        }
      })
      this.primaryBeneficiaryService.retrieveBeneficiaryDetails(searchedAccount).subscribe({
        next: async (data: PrimaryBeneficiary) => {
          this.primaryBeneficiary = data;
        }
      })
    }
  }
}
