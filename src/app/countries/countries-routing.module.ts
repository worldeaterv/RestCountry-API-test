import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component';
import { SearchHistoryComponent } from './pages/search-history/search-history.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalComponent,
  },
  {
    path: 'by-country',
    component: ByCountryComponent,
  },
  {
    path: 'search-history',
    component: SearchHistoryComponent,
  },
  {
    path: 'by/:id',
    component: CountryInfoComponent,
  },
  {
    path: '**',
    redirectTo: 'by-capital',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
