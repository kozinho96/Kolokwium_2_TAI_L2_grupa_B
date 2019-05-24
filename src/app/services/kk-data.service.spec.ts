import { TestBed } from '@angular/core/testing';

import { KKDataService } from './kk-data.service';

describe('KKDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KKDataService = TestBed.get(KKDataService);
    expect(service).toBeTruthy();
  });
});
