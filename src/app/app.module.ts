import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateItineraryComponent } from './create-itinerary/create-itinerary.component';
import { ItineraryDetailsComponent } from './itinerary-details/itinerary-details.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SearchItinerariesComponent } from './search-itineraries/search-itineraries.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchBarComponent } from './homepage/search-bar/search-bar.component';
import { FeaturedItinerariesComponent } from './homepage/featured-itineraries/featured-itineraries.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CreateItineraryComponent,
    ItineraryDetailsComponent,
    RecommendationsComponent,
    SearchItinerariesComponent,
    UserProfileComponent,
    SearchBarComponent,
    FeaturedItinerariesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
