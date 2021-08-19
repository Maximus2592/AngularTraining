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

  constructor(){
    this.title="First Angular SPA";
    
    this.logos=["assets/images/w1.jpg","assets/images/w2.jpg"];
    this.logo=this.logos[0];
  }

  swapLogos(){
    if(this.logo===this.logos[0])
      this.logo=this.logos[1];
    else
      this.logo=this.logos[0];
  }
}
