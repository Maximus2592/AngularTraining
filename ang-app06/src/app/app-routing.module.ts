import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './service/admin.guard';
import { HomeGuard } from './service/home.guard';
import { TxnsGuard } from './service/txns.guard';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard], canLoad: [AdminGuard], canActivateChild: [AdminGuard]
  },
  {
    path: 'txns',
    loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule),
    canActivate: [TxnsGuard], canLoad: [TxnsGuard], canActivateChild: [TxnsGuard]
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [HomeGuard], canLoad: [HomeGuard], canActivateChild: [HomeGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
