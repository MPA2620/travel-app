import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateItineraryComponent } from './create-itinerary/create-itinerary.component';
import { ItineraryDetailsComponent } from './itinerary-details/itinerary-details.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SearchItinerariesComponent } from './search-itineraries/search-itineraries.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CreateItineraryComponent,
    ItineraryDetailsComponent,
    RecommendationsComponent,
    SearchItinerariesComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
