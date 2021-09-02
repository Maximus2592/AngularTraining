import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TxnFormComponent } from './txn-form/txn-form.component';

import { TxnsComponent } from './txns/txns.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'addUser',component:UserFormComponent},
  {path:'editUser/:uid',component:UserFormComponent},
  {path:'txns/:uid',component:TxnsComponent},
  {path:'addTxn/:uid',component:TxnFormComponent},
  {path:'editTxn/:tid',component:TxnFormComponent},
  {path:'',pathMatch:'full',redirectTo:'/users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
