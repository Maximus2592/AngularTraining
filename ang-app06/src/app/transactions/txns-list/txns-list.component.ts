import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionSummary } from 'src/app/models/transaction-summary';
import { User } from 'src/app/models/user';
import { TxnsService } from 'src/app/service/txns.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-txns-list',
  templateUrl: './txns-list.component.html',
  styleUrls: ['./txns-list.component.css']
})
export class TxnsListComponent implements OnInit {

  user:User|null;
  txnSummary?:TransactionSummary;
  err?:string;

  constructor(private userService:UsersService,private txnService:TxnsService) {
    this.user = this.userService.currentUser();
  }

  ngOnInit(): void {
    this.loadData();  
  }

  loadData(){
    if(this.user){
      this.txnService.getTransactionSummaryByUserId(this.user.id??0).subscribe(
        data => this.txnSummary=data,
        err => {console.log(err); this.err="unable to fetech data"}
      );
    }
  }

  remove(tid?:number){
    this.txnService.deleteById(tid??0).subscribe(
      () => this.loadData(),
      err => {console.log(err); this.err="unable to delete data"}
    );
  }
}
