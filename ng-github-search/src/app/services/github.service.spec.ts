import { TestBed, inject } from '@angular/core/testing';

import { GithubService } from './github.service';

describe('GistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ GithubService ]
    });
  });

  it('should be created', inject([GithubService], (service: GithubService) => {
    expect(service).toBeTruthy();
  }));
});
