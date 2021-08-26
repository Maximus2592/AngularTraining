import { Component, OnInit } from '@angular/core';
import { NumberSeriesService } from '../service/number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent implements OnInit {

  lb: number;
  ub: number;
  isJobInProgress: boolean;

  nums?:number[];
  errMsg?:string;

  constructor(private numSeriesService:NumberSeriesService) {
    this.lb=0;
    this.ub=0;
    this.isJobInProgress=false;
  }

  ngOnInit(): void {
  }

  handleFormSubmition(){
    this.isJobInProgress=true;
    this.nums=[];
    let ob = this.numSeriesService.generateSeries(this.lb,this.ub);

    ob.subscribe(
      n => this.nums?.push(n),
      err => { this.errMsg=err; this.isJobInProgress=false;},
      () => this.isJobInProgress=false
    );
  }
}
