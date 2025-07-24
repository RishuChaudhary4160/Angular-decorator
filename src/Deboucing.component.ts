import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';

@Component({
  selector: 'my-Debouncing',
  template: `
    <div>
      <input
        type="text"
        [formControl]="searchControl"
        placeholder="Search items..."
      />
      <div *ngIf="searchResults.length > 0">
        <h3>Search Results:</h3>
        <ul>
          <li *ngFor="let result of searchResults">{{ result }}</li>
        </ul>
      </div>
      <div *ngIf="searchResults.length === 0 && searchControl.value">
        No results found
      </div>
    </div>
  `,
  styles: [
    `
      input {
        padding: 8px;
        width: 300px;
        margin: 20px;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        padding: 5px;
      }
    `,
  ],
})
export class AppComponent {
  searchControl = new FormControl('');
  searchResults: string[] = [];

  // Sample data array with explicit type
  private items: string[] = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grape',
    'Strawberry',
  ];

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(3000), // Wait for 3 seconds after last input
        distinctUntilChanged(), // Only emit if value is different from previous
        switchMap((searchTerm) => this.searchItems(searchTerm || '')) // Use searchItems which returns an Observable
      )
      .subscribe((results) => {
        this.searchResults = results;
      });
  }

  private searchItems(searchTerm: string) {
    // Wrap the result in an Observable
    return of(
      !searchTerm.trim()
        ? []
        : this.items.filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
          )
    );
  }
}
