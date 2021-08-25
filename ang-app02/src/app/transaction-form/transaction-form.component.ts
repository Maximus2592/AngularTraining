import { Component,EventEmitter,Output } from '@angular/core';
import { Transaction } from '../model/transaction';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {

  txn:Transaction;

  @Output()
  saveTransaction:EventEmitter<Transaction>;

  constructor() { 
    this.txn={id:0,particulars:'',dateOfTransaction:new Date(),amount:0,type:''};
    this.saveTransaction=new EventEmitter<Transaction>();
  }

  handleFormSubmit(){
    this.saveTransaction.emit(this.txn); //pass the filled txn object to parent component
    this.txn={id:0,particulars:'',dateOfTransaction:new Date(),amount:0,type:''}; //reset the form to default vlaues
  }
}
