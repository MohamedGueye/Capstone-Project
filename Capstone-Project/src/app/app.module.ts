import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BannerComponent } from "./banner/banner.component";
import { BeneficiaryComponent } from "./beneficiary/beneficiary.component";
import { BusinessesComponent } from "./businesses/businesses.component";
import { CommoditiesComponent } from "./commodities/commodities.component";
import { OverlayComponent } from "./overlay/overlay.component";
import { RealEstateComponent } from "./real-estate/real-estate.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { StocksComponent } from "./stocks/stocks.component";
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { AccountService } from "./account/account.service";
import { PrimaryBeneficiaryDetailsService } from "./service/primary-beneficiary-details.service";
import { ContingentBeneficiaryDetailsService } from "./service/contingent-beneficiary-details.service";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BannerComponent,
        BeneficiaryComponent,
        BusinessesComponent,
        CommoditiesComponent,
        OverlayComponent,
        RealEstateComponent,
        SearchBarComponent,
        StocksComponent,
        AccountComponent
    ],
    providers: [
        AccountService, 
        PrimaryBeneficiaryDetailsService, 
        ContingentBeneficiaryDetailsService
    ],
    bootstrap: [AppComponent],
    exports: [AppComponent],
})
export class AppModule {}
