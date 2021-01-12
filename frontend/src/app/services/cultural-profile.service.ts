import { Injectable } from '@angular/core';
import { UtilHttpService } from './util-http.service';
@Injectable({
  providedIn: 'root'
})
export class CulturalProfileService {

  constructor(
    private http: UtilHttpService
  ) { }

  //Creates a new cultural profile
  createCulturalProfile(porfDynamics: any[]) {
    const culturalProfileEndpoint = 'create_cultural_profile';
    return  this.http.post(culturalProfileEndpoint, porfDynamics);
  }

  //Compares the stored job cultural profile with the one corresponding to the specified user
  compareProfiles(username) {
    const compareProfilesEndpoint = 'compare_profiles';
    const body = {
      username : username,
      culturalProfile: JSON.parse(sessionStorage.getItem('culturalProfile'))
    }
    return  this.http.post(compareProfilesEndpoint, body);
  }
}
