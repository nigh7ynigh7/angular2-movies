import { TestBed, inject } from '@angular/core/testing';

import { ApiTestService } from './api-test.service';

describe('ApiTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiTestService]
    });
  });

  it('should ...', inject([ApiTestService], (service: ApiTestService) => {
    expect(service).toBeTruthy();
  }));
});
