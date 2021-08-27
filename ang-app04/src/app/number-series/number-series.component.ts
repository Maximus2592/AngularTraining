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

  nums?: number[];
  errMsg?: string;

  isSquared: boolean;
  isEven: boolean;

  constructor(private numSeriesService: NumberSeriesService) {
    this.lb = 0;
    this.ub = 0;
    this.isJobInProgress = false;
    this.isSquared = false;
    this.isEven = false;
  }

  ngOnInit(): void {
  }

  handleFormSubmition() {
    this.isJobInProgress = true;
    this.nums = [];

    let ob;

    if (this.isSquared && this.isEven)
      ob = this.numSeriesService.generateEvenSquaredSeries(this.lb, this.ub);
    else if (this.isEven)
      ob = this.numSeriesService.generateEvenSeries(this.lb, this.ub);
    else if (this.isSquared)
      ob = this.numSeriesService.generateSquaredSeries(this.lb, this.ub);
    else
      ob = this.numSeriesService.generateSeries(this.lb, this.ub);

    ob.subscribe(
      n => this.nums?.push(n),
      err => { this.errMsg = err; this.isJobInProgress = false; },
      () => this.isJobInProgress = false
    );
  }
}
