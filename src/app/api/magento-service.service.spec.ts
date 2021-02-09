import { TestBed } from '@angular/core/testing';

import { MagentoServiceService } from './magento-service.service';

describe('MagentoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagentoServiceService = TestBed.get(MagentoServiceService);
    expect(service).toBeTruthy();
  });
});
