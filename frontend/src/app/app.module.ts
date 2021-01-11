import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CulturalProfileComponent } from './components/cultural-profile/cultural-profile.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { HomeComponent } from './components/home/home.component';
import { ComparisonDashboardComponent } from './components/comparison-dashboard/comparison-dashboard.component';
import { ProfessionalDynamicsSelectorComponent } from './components/professional-dynamics-selector/professional-dynamics-selector.component'
@NgModule({
  declarations: [
    AppComponent,
    CulturalProfileComponent,
    UserSearchComponent,
    HomeComponent,
    ComparisonDashboardComponent,
    ProfessionalDynamicsSelectorComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
