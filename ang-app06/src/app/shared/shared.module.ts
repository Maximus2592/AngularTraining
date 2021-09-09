import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from '../widget/widget.module';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetModule
  ],
  exports:[
    HomeComponent
  ]
})
export class SharedModule { }
