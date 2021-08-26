import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number):Observable<number>{
    return new Observable<number>(
      (observer:Observer<number>) => {
        
        if(lb>ub){
          observer.error("Invalid boundaries, Operation aborted");
        }else{

          let currentVal = lb;

          let handler = setInterval(() => {
            observer.next(currentVal); //emiting the data
            currentVal++;
            if(currentVal>ub){
              clearInterval(handler); //setInterval will stop..
              observer.complete(); //signal the completion of the job
            }
          },1000);
        }

      }
    );
  }
}
