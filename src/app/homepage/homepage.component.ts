import { Component, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit {
  heroOpacity: number = 1;
  heroBlur: string = 'blur(0px)';
  searchQuery: string = '';

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.heroOpacity = Math.max(1 - scrollTop / 300, 0); // Adjust the divisor to control fade speed
    this.heroBlur = `blur(${Math.min(scrollTop / 50, 10)}px)`; // Adjust the divisor to control blur speed and max blur
  }

  navigateToCreateItinerary() {
    this.router.navigate(['/create-itinerary']);
  }

  navigateToRecommendations() {
    this.router.navigate(['/recommendations']);
  }

  handleSearch(query: string) {
    this.searchQuery = query;
    console.log('Search query:', this.searchQuery); // Debug log
    this.scrollToMap();
  }

  ngAfterViewInit() {
    console.log('Interactive Map Component Loaded'); // Debug log
  }

  scrollToMap() {
    const interactiveMapElement = document.getElementById('interactiveMap');
    if (interactiveMapElement) {
      console.log('Scrolling to interactive map'); // Debug log
      interactiveMapElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error('Interactive map element not found');
    }
  }
}
