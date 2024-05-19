import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItinerariesComponent } from './search-itineraries.component';

describe('SearchItinerariesComponent', () => {
  let component: SearchItinerariesComponent;
  let fixture: ComponentFixture<SearchItinerariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchItinerariesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchItinerariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
