import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  strData:string;
  num:number;
  today:Date;

  constructor() {
    this.strData="Hello! welcoem you all to pipes demo component";
    this.num=Math.PI*100;
    this.today=new Date();
   }

}
