import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent
  ]
})
export class SharedModule { }
