import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TxnService {

  txnAPI:string;

  constructor(private httpClient:HttpClient) {
    this.txnAPI=environment.txnAPI;
  }

  gatAll():Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(this.txnAPI);
  }

  gatById(txnId:number):Observable<Transaction>{
    return this.httpClient.get<Transaction>(`${this.txnAPI}/${txnId}`);
  }

  gatAllByUserId(userId:number):Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(`${this.txnAPI}?userId=${userId}`);
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
