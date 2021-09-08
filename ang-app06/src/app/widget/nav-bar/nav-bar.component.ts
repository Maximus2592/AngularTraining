import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {

  @Input()
  brand?:string;

  @Input()
  links?:string[][];

  @Output()
  logoutClicked:EventEmitter<void>;

  constructor() {
    this.logoutClicked=new EventEmitter<void>();
  }

  raiseLogout(){
    this.logoutClicked.emit();
  }

}
