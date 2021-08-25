import { Component, Input } from '@angular/core';
import { Transaction } from '../model/transaction';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent {

  @Input()
  txns?:Transaction[];

  constructor() { }

}
