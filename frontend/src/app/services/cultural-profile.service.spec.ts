import { TestBed } from '@angular/core/testing';

import { CulturalProfileService } from './cultural-profile.service';

describe('CulturalProfileService', () => {
  let service: CulturalProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CulturalProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
