import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoxComponent } from './message-box/message-box.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [MessageBoxComponent, NavBarComponent],
  imports: [
    CommonModule
  ]
})
export class WidgetModule { }
