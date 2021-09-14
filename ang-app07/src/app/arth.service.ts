import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArthService {

  constructor() { }

  factorsCount(n:number) : number{
    let count=2;

    n = Math.abs(n);
    
    for(let i=2;i<=n/2;i++){
      if(n%i==0){
        count++;
      }
    }

    return count;
  }

  isPrime(n:number):boolean{
    return this.factorsCount(n)===2;
  }
}
