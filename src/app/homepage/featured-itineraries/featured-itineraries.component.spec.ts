import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedItinerariesComponent } from './featured-itineraries.component';

describe('FeaturedItinerariesComponent', () => {
  let component: FeaturedItinerariesComponent;
  let fixture: ComponentFixture<FeaturedItinerariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedItinerariesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedItinerariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
