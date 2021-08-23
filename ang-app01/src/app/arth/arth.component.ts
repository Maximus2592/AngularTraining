import { Component } from '@angular/core';

@Component({
  selector: 'app-arth',
  templateUrl: './arth.component.html',
  styleUrls: ['./arth.component.css']
})
export class ArthComponent {

  n1: number;
  n2: number;

  actions: string[];
  action: string;

  constructor() {
    this.n1=0;
    this.n2=0;
    this.action="";
    this.actions=["SUM","DIF","PRD","QUT","REM"];
  }
}
