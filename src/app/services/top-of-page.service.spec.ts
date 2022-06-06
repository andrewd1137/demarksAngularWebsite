import { TestBed } from '@angular/core/testing';

import { TopOfPageService } from './top-of-page.service';

describe('TopOfPageService', () => {
  let service: TopOfPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopOfPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
