import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css'],
})
export class SearchHistoryComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory() {
    return this.countriesService.getHistory();
  }
}
