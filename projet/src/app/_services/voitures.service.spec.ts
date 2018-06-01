import { TestBed, inject } from '@angular/core/testing';

import { VoituresService } from './voitures.service';

describe('VoituresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoituresService]
    });
  });

  it('should be created', inject([VoituresService], (service: VoituresService) => {
    expect(service).toBeTruthy();
  }));
});
