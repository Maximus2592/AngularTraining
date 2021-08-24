import { Injectable } from '@angular/core';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  txns: Transaction[];

  constructor() {

    this.txns=[
      {id:1,particulars:'Salary',amount:55000,dateOfTransaction:new Date(),type:'INCOME'},
      {id:2,particulars:'Bonus',amount:15000,dateOfTransaction:new Date(),type:'INCOME'},
      {id:3,particulars:'House Rent',amount:5500,dateOfTransaction:new Date(),type:'SPENDING'},
      {id:4,particulars:'Bike Fuel',amount:1500,dateOfTransaction:new Date(),type:'SPENDING'},
      {id:5,particulars:'Internet Bill',amount:500,dateOfTransaction:new Date(),type:'SPENDING'}
    ];

  }

  getAll():Transaction[]{
    return this.txns;
  }

  getById(id:number):Transaction|undefined{
    return this.txns.find(t => t.id===id);
  }

  add(txn:Transaction):Transaction{
    if(this.txns.length===0)
      txn.id=1;
    else{
      txn.id = this.txns.map(t => t.id).reduce((id1,id2)=>id1>id2?id1:id2) +1;
    }
    this.txns.push(txn);
    return txn;
  }  

  update(txn:Transaction):Transaction{
    let index = this.txns.findIndex(t => t.id===txn.id);
    
    if(index==-1)
      throw "No Such Record";
    
    this.txns[index]=txn;
    return txn;
  }  

  deleteById(id:number):void{
    let index = this.txns.findIndex(t => t.id===id);
    
    if(index==-1)
      throw "No Such Record";
    
    this.txns.splice(index,1);
  }
}
