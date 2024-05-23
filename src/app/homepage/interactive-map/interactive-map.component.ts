import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Marker {
  position: google.maps.LatLngLiteral;
  title: string;
  info: string;
}

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.css']
})
export class InteractiveMapComponent implements OnChanges {
  @Input() searchQuery: string = '';

  center: google.maps.LatLngLiteral = { lat: 40.730610, lng: -73.935242 }; // Default to New York
  zoom = 12;
  mapOptions: google.maps.MapOptions = {
    maxZoom: 18,
    minZoom: 4,
  };
  markers: Marker[] = [];
  selectedInfoWindow: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchQuery'] && this.searchQuery) {
      console.log('Search query received in map component:', this.searchQuery); // Debug log
      this.searchCity(this.searchQuery);
    }
  }

  searchCity(city: string) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: city }, (results, status) => {
      if (status === 'OK' && results && results.length > 0) {
        const location = results[0].geometry?.location;
        if (location) {
          this.center = {
            lat: location.lat(),
            lng: location.lng()
          };
          this.loadAttractions();
        }
      } else {
        console.error('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  loadAttractions() {
    if (typeof google !== 'undefined' && google.maps && google.maps.places) {
      const service = new google.maps.places.PlacesService(document.createElement('div'));
      const request: google.maps.places.PlaceSearchRequest = {
        location: this.center,
        radius: 5000, // 5km radius
        type: 'tourist_attraction'
      };

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          this.markers = results.map(result => {
            const location = result.geometry?.location;
            return {
              position: {
                lat: location?.lat() ?? 0,
                lng: location?.lng() ?? 0
              },
              title: result.name ?? 'Unknown',
              info: result.vicinity ?? 'No information available'
            };
          });
        }
      });
    } else {
      console.error('Google Maps Places API is not available');
    }
  }

  openInfoWindow(marker: Marker) {
    this.selectedInfoWindow = marker.info;
  }
}
