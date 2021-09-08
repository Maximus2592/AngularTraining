import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsComponent } from './transactions.component';
import { TxnsFormComponent } from './txns-form/txns-form.component';
import { TxnsListComponent } from './txns-list/txns-list.component';

const routes: Routes = [
  { path: '', component: TransactionsComponent,children:[
    {path:'list',component:TxnsListComponent},
    {path:'add',component:TxnsFormComponent},
    {path:'edit/:txnId',component:TxnsFormComponent},
    {path:'',pathMatch:'full',redirectTo:'list'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
