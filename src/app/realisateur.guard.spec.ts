import { TestBed } from '@angular/core/testing';

import { RealisateurGuard } from './realisateur.guard';

describe('RealisateurGuard', () => {
  let guard: RealisateurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RealisateurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
