import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateItineraryComponent } from './create-itinerary/create-itinerary.component';
import { ItineraryDetailsComponent } from './itinerary-details/itinerary-details.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SearchItinerariesComponent } from './search-itineraries/search-itineraries.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'create-itinerary', component: CreateItineraryComponent },
  { path: 'itinerary-details/:id', component: ItineraryDetailsComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'search-itineraries', component: SearchItinerariesComponent },
  { path: 'user-profile', component: UserProfileComponent }
];

export { routes };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
