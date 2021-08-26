import { Component } from '@angular/core';
import { Transaction } from '../model/transaction';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent {

  txns:Transaction[];

  constructor(private txnService:TransactionService) {
    this.txns=this.txnService.getAll();
  }

}
