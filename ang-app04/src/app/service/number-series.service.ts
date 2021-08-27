import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map,filter } from 'rxjs/operators';

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

  generateSquaredSeries(lb:number,ub:number):Observable<number>{  
    let ob = this.generateSeries(lb,ub);
    let obNew = ob.pipe(
      map(x => x*x)
    );
    return obNew;
  }

  generateEvenSeries(lb:number,ub:number):Observable<number>{  
    let ob = this.generateSeries(lb,ub);
    let obNew = ob.pipe(
      filter(x => x%2==0)
    );
    return obNew;
  }

  generateEvenSquaredSeries(lb:number,ub:number):Observable<number>{  
    let ob = this.generateSeries(lb,ub);
    let obNew = ob.pipe(
      filter(x => x%2==0),
      map(x => x*x)
    );
    return obNew;
  }
}
