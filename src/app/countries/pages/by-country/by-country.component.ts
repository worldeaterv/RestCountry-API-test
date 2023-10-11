import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCountryName(term: string): void {
    this.countriesService.searchCountryName(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
