import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  heroOpacity: number = 1;

  constructor(private router: Router) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.heroOpacity = Math.max(1 - scrollTop / 300, 0); // Adjust the divisor to control fade speed
  }

  navigateToCreateItinerary() {
    this.router.navigate(['/create-itinerary']);
  }

  navigateToRecommendations() {
    this.router.navigate(['/recommendations']);
  }
}
