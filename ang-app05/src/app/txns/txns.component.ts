import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../model/transaction';
import { TransactionSummary } from '../model/transaction-summary';
import { User } from '../model/user';
import { TxnService } from '../service/txn.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-txns',
  templateUrl: './txns.component.html',
  styleUrls: ['./txns.component.css']
})
export class TxnsComponent implements OnInit {

  user?:User;
  txnSmry?:TransactionSummary;
  err?:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private txnService:TxnService) { }

  ngOnInit(): void {
    
    let userId= this.activatedRoute.snapshot.params.uid;

    if(userId){

      this.userService.getById(userId).subscribe(
        data => this.user=data,
        err=>{console.log(err);this.err="User details fetech failed!"}
      );

      this.loadTxns(userId);

    }else{
      this.err="User not recognized";
    }
  }

  loadTxns(userId:number){
    this.txnService.getTransactionSummaryByUserId(userId).subscribe(
      data => this.txnSmry=data,
      err=>{console.log(err);this.err="Transactions fetech failed!"}
    );
  }

  remove(txId?:number){
    this.txnService.deleteById(txId??0).subscribe(
      () => this.loadTxns(this.user?.id??0),
      err=>{console.log(err);this.err="Transactions fetech failed!"}
    );
  }

}
