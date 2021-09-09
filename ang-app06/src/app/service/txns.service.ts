import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transaction';
import { TransactionSummary } from '../models/transaction-summary';

@Injectable({
  providedIn: 'root'
})
export class TxnsService {

  txnAPI:string;

  constructor(private httpClient:HttpClient) {
    this.txnAPI=environment.txnAPI;
  }

  gatAll():Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(this.txnAPI);
  }

  gatAllByUserId(userId:number):Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(`${this.txnAPI}?userId=${userId}`);
  }

  getTransactionSummaryByUserId(userId:number):Observable<TransactionSummary>{
    return this.httpClient.get<Transaction[]>(`${this.txnAPI}?userId=${userId}`).pipe(
      map(txns => {

        let incomes = txns.filter(t => t.type==='INCOME');
        let spendings = txns.filter(t => t.type==='SPENDING');

        let totalIncome:number=
          (incomes && incomes.length>0)? 
            incomes.map(t => t.amount).
            reduce((a1,a2)=>((a1??0)+(a2??0)))??0 :0;

        let totalSpending:number=
          (spendings && spendings.length>0)? 
            spendings.map(t => t.amount).
            reduce((a1,a2)=>((a1??0)+(a2??0)))??0 :0;
            
        let balance:number=totalIncome-totalSpending;

        let txnSmry : TransactionSummary = {txns,totalIncome,totalSpending,balance};
        return txnSmry;;
      })
    );
  }

  getById(txnId:number):Observable<Transaction>{
    return this.httpClient.get<Transaction>(`${this.txnAPI}/${txnId}`);
  }

  add(txn:Transaction):Observable<Transaction>{
    return this.httpClient.post(this.txnAPI,txn);
  }

  update(txn:Transaction):Observable<Transaction>{
    return this.httpClient.put<Transaction>(`${this.txnAPI}/${txn.id}`,txn);
  }

  deleteById(txnId:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.txnAPI}/${txnId}`);
  }
}
