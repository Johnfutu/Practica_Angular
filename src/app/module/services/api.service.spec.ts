import { TestBed } from '@angular/core/testing';
import { apiService } from './api.service';

describe('ApiService', () => {
let service = new apiService();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(apiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
