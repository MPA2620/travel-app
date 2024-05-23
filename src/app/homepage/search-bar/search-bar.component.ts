import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchQuery: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Emitting search query:', this.searchQuery); // Debug log
      // Emit the search query
      this.search.emit(this.searchQuery);
      // Navigate to the search results page with the search query
      this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
    }
  }
}
