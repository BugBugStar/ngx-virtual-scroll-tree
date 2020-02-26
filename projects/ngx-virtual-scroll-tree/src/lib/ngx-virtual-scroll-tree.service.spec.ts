import { TestBed } from '@angular/core/testing';

import { NgxVirtualScrollTreeService } from './ngx-virtual-scroll-tree.service';

describe('NgxVirtualScrollTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxVirtualScrollTreeService = TestBed.get(NgxVirtualScrollTreeService);
    expect(service).toBeTruthy();
  });
});
