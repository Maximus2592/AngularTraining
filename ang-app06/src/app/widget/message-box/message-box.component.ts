import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {

  @Input()
  msg?:string;

  @Input()
  type?:string;

  @Output()
  okClicked:EventEmitter<void>;

  constructor() {
    this.okClicked=new EventEmitter<void>();
  }

  raiseOkClicked(){
    this.okClicked.emit();
  }
}
