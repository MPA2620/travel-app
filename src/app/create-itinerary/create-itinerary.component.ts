import { Component } from '@angular/core';

@Component({
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrls: ['./create-itinerary.component.css']
})
export class CreateItineraryComponent {
  itinerary = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    destinations: '',
    activities: ''
  };
  submitted = false;

  onSubmit() {
    console.log('Itinerary Created:', this.itinerary);
    this.submitted = true;
  }
}
