import { Component,EventEmitter,Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../model/transaction';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {

  txnForm:FormGroup;

  pControl:FormControl;
  aControl:FormControl;
  tControl:FormControl;
  dControl:FormControl;

  @Output()
  saveTransaction:EventEmitter<Transaction>;

  constructor() { 

    this.pControl=new FormControl('',[Validators.required,Validators.minLength(5)]);
    this.aControl=new FormControl(0,[Validators.required,Validators.min(1)]);
    this.tControl=new FormControl('',[Validators.required]);
    this.dControl=new FormControl(new Date(),[Validators.required]);

    this.txnForm = new FormGroup({
      particulars:this.pControl,
      amount:this.aControl,
      type:this.tControl,
      dateOfTransaction:this.dControl
    });
    
    this.saveTransaction=new EventEmitter<Transaction>();
  }

  handleFormSubmit(){
    this.saveTransaction.emit({...this.txnForm.value,id:0}); //pass the filled txn object to parent component
    this.txnForm.reset();//reset the form to default values
  }
}
