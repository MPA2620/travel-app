import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-featured-itineraries',
  templateUrl: './featured-itineraries.component.html',
  styleUrls: ['./featured-itineraries.component.css'],
})
export class FeaturedItinerariesComponent implements OnInit {
  opacity: number = 0;
  transform: string = 'translateX(-20px)';
  blur: string = 'blur(10px)';
  delays: string[] = [];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.checkVisibility();
    this.setDelays();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const element = this.el.nativeElement.querySelector('.carousel-container');
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const totalHeight = Math.min(windowHeight, rect.height);
      const visibilityRatio = visibleHeight / totalHeight;
      this.opacity = visibilityRatio;
      this.transform = `translateX(${(1 - visibilityRatio) * -150}px)`;
      this.blur = `blur(${10 - (visibilityRatio * 10)}px)`;
    } else {
      this.opacity = 0;
      this.transform = 'translateX(-150px)';
      this.blur = 'blur(10px)';
    }
  }

  setDelays() {
    this.itineraries.forEach((_, index) => {
      this.delays[index] = `${index * 0.3}s`; // 0.3s delay between each card
    });
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
