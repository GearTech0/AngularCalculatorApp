import { TestBed, inject } from '@angular/core/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';

import { CalculateService } from './calculate.service';

describe('CalculateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, CalculateService]
    });
  });
  it(`should return Even`, inject([CalculateService], (service: CalculateService) => {
    expect(service.getEvenOdd(4)).toBe('Even');
  }));
  it(`should return Odd`, inject([CalculateService], (service: CalculateService) => {
    expect(service.getEvenOdd(5)).toBe('Odd');
  }));
  it('should be created', inject([CalculateService], (service: CalculateService) => {
    expect(service).toBeTruthy();
  }));
});
