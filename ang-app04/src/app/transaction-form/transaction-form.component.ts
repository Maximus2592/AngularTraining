import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from '../model/transaction';
import { TransactionService } from '../service/transaction.service';

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

  constructor(private txnService:TransactionService,private router:Router) { 

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
    
  }

  handleFormSubmit(){
    this.txnService.add({...this.txnForm.value,id:0}); 
    this.router.navigateByUrl("/list");    
  }
}
