import { TestBed } from '@angular/core/testing';

import { DisplayConfigService } from './DisplayConfig.service';

describe('DisplayConfigService', () => {
  let service: DisplayConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
