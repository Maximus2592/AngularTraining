import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
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
  txns?:Transaction[];

  constructor(private userService:UsersService,private txnService:TxnsService) {
    this.user = this.userService.currentUser();
  }

  ngOnInit(): void {
    if(this.user){

    }
  }

}
