import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-featured-itineraries',
  templateUrl: './featured-itineraries.component.html',
  styleUrls: ['./featured-itineraries.component.css'],
})

export class FeaturedItinerariesComponent implements OnInit {
  opacity: number = 0;
  transform: string = 'translateX(-20px)';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const element = this.el.nativeElement.querySelector('.carousel-container');
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate the opacity and transform based on the element's visibility in the viewport
    if (rect.top < windowHeight && rect.bottom > 0) {
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const totalHeight = Math.min(windowHeight, rect.height);
      const visibilityRatio = visibleHeight / totalHeight;
      this.opacity = visibilityRatio;
      this.transform = `translateX(${(1 - visibilityRatio) * -150}px)`; // Increase distance for a more aggressive effect
    } else {
      this.opacity = 0;
      this.transform = 'translateX(-150px)'; // Increase distance for a more aggressive effect
    }
  }

  itineraries = [
    {
      title: 'Paris Adventure',
      description: 'Explore the city of lights and romance.',
      image: 'https://images.unsplash.com/photo-1583265266785-aab9e443ee68?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Tokyo Delights',
      description: 'Discover the heart of Japan.',
      image: 'https://images.unsplash.com/photo-1570521462033-3015e76e7432?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'New York Highlights',
      description: 'Experience the Big Apple like never before.',
      image: 'https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    // Add more itineraries as needed
  ];

  carouselOptions = {
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };
}
