import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { LocationComponent } from './location/location.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'treatments', component: TreatmentsComponent},
    { path: 'location', component: LocationComponent}
];
