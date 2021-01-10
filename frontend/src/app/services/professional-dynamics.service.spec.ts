import { TestBed } from '@angular/core/testing';

import { ProfessionalDynamicsService } from './professional-dynamics.service';

describe('GetProfessionalDynamicsService', () => {
  let service: ProfessionalDynamicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalDynamicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
