import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { CountryViewComponent } from './components/country-view/country-view.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component';
import { SearchHistoryComponent } from './pages/search-history/search-history.component';


@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    CountryViewComponent,
    CountryInfoComponent,
    SearchHistoryComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
