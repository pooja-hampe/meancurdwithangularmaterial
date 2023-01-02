import { TestBed } from '@angular/core/testing';

import { CsvapiService } from './csvapi.service';

describe('CsvapiService', () => {
  let service: CsvapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
