import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authguardGuard } from './authguard.guard';

describe('authguardGuard', () => {
  // @ts-ignore
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => new authguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
