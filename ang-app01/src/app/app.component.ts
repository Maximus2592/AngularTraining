import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;

  logo:string;

  logos:string[];

  imgWidth:number;

  isRounded:boolean;
  isCentered:boolean;
  isBordered:boolean;

  show:boolean;

  constructor(){
    this.title="First Angular SPA";
    this.imgWidth=300;
    this.logos=["assets/images/w1.jpg","assets/images/w2.jpg"];
    this.logo=this.logos[0];
    this.isRounded=false;
    this.isCentered=false;
    this.isBordered=false;
    this.show=false;
  }

  swapLogos(){
    if(this.logo===this.logos[0])
      this.logo=this.logos[1];
    else
      this.logo=this.logos[0];
  }
}
