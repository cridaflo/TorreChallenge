import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CulturalProfileComponent } from './components/cultural-profile/cultural-profile.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { HomeComponent } from './components/home/home.component';
import { ComparisonDashboardComponent } from './components/comparison-dashboard/comparison-dashboard.component';
import { ProfessionalDynamicsSelectorComponent } from './components/professional-dynamics-selector/professional-dynamics-selector.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'professional-dynamics-selection', component: ProfessionalDynamicsSelectorComponent},
  {path: 'cultural-profile', component: CulturalProfileComponent},
  {path: 'user-search', component: UserSearchComponent},
  {path: 'comparison-dashboard', component: ComparisonDashboardComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
