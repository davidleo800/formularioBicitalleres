import { TestBed } from '@angular/core/testing';

import { BicitalleresService } from './bicitalleres.service';

describe('BicitalleresService', () => {
  let service: BicitalleresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BicitalleresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
