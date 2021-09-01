import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../model/transaction';
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
  txns?:Transaction[];
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
    this.txnService.gatAllByUserId(userId).subscribe(
      data => this.txns=data,
      err=>{console.log(err);this.err="Transactions fetech failed!"}
    );
  }

  remove(txId:number){
    this.txnService.deleteById(txId).subscribe(
      () => this.loadTxns(this.user?.id??0),
      err=>{console.log(err);this.err="Transactions fetech failed!"}
    );
  }

}
