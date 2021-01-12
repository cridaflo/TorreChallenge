import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { FeatherModule } from 'angular-feather';

import { AppComponent } from './app.component';
import { CulturalProfileComponent } from './components/cultural-profile/cultural-profile.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { HomeComponent } from './components/home/home.component';
import { ComparisonDashboardComponent } from './components/comparison-dashboard/comparison-dashboard.component';
import { ProfessionalDynamicsSelectorComponent } from './components/professional-dynamics-selector/professional-dynamics-selector.component'
import { Search } from 'angular-feather/icons';
import { NgxSpinnerModule } from 'ngx-spinner';

const icons = {
  Search
};

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
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FeatherModule.pick(icons),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
