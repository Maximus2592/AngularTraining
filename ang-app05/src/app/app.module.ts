import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { TxnsComponent } from './txns/txns.component';
import { TxnFormComponent } from './txn-form/txn-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TxnHomeComponent } from './txn-home/txn-home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TxnsComponent,
    TxnFormComponent,
    UserFormComponent,
    TxnHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
