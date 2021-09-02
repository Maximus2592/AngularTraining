import { Transaction } from "./transaction";

export interface TransactionSummary {
    txns:Transaction[];
    totalIncome:number;
    totalSpending:number;
    balance:number;
}
