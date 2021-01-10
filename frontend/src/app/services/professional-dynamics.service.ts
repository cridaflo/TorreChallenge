import { Injectable } from '@angular/core';
import { UtilHttpService } from './util-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalDynamicsService {

  

  constructor(
    private http: UtilHttpService
  ) { }

  getProfessionalDynamics() {
    const professionalDynamicsEndpoint = 'professional_dynamics';
    return this.http.get(professionalDynamicsEndpoint);
  }
}
