import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(private router: Router) { }

  navigateToCreateItinerary() {
    this.router.navigate(['/create-itinerary']);
  }

  navigateToRecommendations() {
    this.router.navigate(['/recommendations']);
  }
}
