import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { CommoditiesComponent } from './commodities/commodities.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { OverlayComponent } from './overlay/overlay.component';
import { BannerComponent } from './banner/banner.component';
import { AccountComponent } from './account/account.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccountComponent, SearchBarComponent, BeneficiaryComponent, CommoditiesComponent, BusinessesComponent, RealEstateComponent, StocksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Capstone-Project';
  @ViewChild(AccountComponent) accountComponent!: {
    onSearchUpdate: (value: string) => void;
  };

  errorMessage?: string;

  onSearch(value: string) {
    this.accountComponent.onSearchUpdate(value);
  }

  onErrorUpdate(value: string) {
    this.errorMessage = value;
  }
}
