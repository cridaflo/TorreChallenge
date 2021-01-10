import { TestBed } from '@angular/core/testing';

import { UtilHttpService } from './util-http.service';

describe('UtilHttpService', () => {
  let service: UtilHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
