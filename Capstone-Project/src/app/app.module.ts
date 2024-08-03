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
    ],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent],
    exports: [AppComponent],
})
export class AppModule {}
