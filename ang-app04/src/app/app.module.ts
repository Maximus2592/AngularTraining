import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { NumberSeriesComponent } from './number-series/number-series.component';
import { NumberSeriesGroupComponent } from './number-series-group/number-series-group.component';
import { NumberSeriesService } from './service/number-series.service';

const routes :Routes = [
  {path:'list',component:TransactionsListComponent},
  {path:'add',component:TransactionFormComponent},
  {path:'nss',component:NumberSeriesGroupComponent},
  {path:'',pathMatch:'full',redirectTo:'/list'}
];

@NgModule({
  declarations: [
    AppComponent,
    TransactionsListComponent,
    TransactionFormComponent,
    NumberSeriesComponent,
    NumberSeriesGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
