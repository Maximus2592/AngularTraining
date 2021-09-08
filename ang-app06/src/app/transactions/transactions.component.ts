import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  
  links?:string[][];

  constructor(private userService:UsersService,private router:Router) {
    this.links=[
      ['list','Transactions List'],
      ['add','New Transaction']
    ];
  }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("/");
  }
}
