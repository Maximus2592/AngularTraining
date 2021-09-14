import { TestBed } from '@angular/core/testing';

import { ArthService } from './arth.service';

describe('ArthService', () => {
  let service: ArthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#factorCount',()=>{
    it('should return 2 given 5',() =>{
      expect(service.factorsCount(5)).toBe(2);
    })
    it('should return 4 given 10',() =>{
      expect(service.factorsCount(10)).toBe(4);
    })
    it('should return 2 given -5',() =>{
      expect(service.factorsCount(-5)).toBe(2);
    })
    it('should return 4 given -10',() =>{
      expect(service.factorsCount(-10)).toBe(4);
    })
  })

  describe('#isPrime',()=>{
    it('should return true given 5',() =>{
      expect(service.isPrime(5)).toBeTrue();
    })
    it('should return false given 10',() =>{
      expect(service.isPrime(10)).toBeFalse();
    })
    it('should return true given -5',() =>{
      expect(service.isPrime(-5)).toBeTrue();
    })
    it('should return false given -10',() =>{
      expect(service.isPrime(-10)).toBeFalse();
    })
  })
});
