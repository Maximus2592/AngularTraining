import { Component } from '@angular/core';
import { Transaction } from '../model/transaction';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent  {

  txns:Transaction[];

  constructor(private txnService:TransactionService) { 
    this.txns=this.txnService.getAll();
  }

  addTxn(txn:Transaction){
    this.txnService.add(txn);
    this.txns=this.txnService.getAll();
  }
}
