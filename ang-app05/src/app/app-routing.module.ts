import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TxnFormComponent } from './txn-form/txn-form.component';

import { TxnsComponent } from './txns/txns.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'txns/:uid',component:TxnsComponent},
  {path:'addTxn',component:TxnFormComponent},
  {path:'',pathMatch:'full',redirectTo:'/users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
