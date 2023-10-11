import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent {

  @Input()
  public countries: Country[] = [];
}
