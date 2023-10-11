import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css'],
})
export class ByCapitalComponent {
  public countries: Country[] = [];
  
  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
