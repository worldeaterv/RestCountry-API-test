import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private http = inject(HttpClient);

  private searchHistory: string[] = [];

  constructor() {}

  // API
  searchCountryById(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;

    this.addToHistory(url);
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;

    this.addToHistory(url);
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCountryName(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;

    this.addToHistory(url);
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  // HISTORIAL
  addToHistory(url: string) {
    this.searchHistory.push(url);
  }

  getHistory() {
    return this.searchHistory;
  }
}
