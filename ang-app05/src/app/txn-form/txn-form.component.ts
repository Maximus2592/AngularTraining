import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TxnService } from '../service/txn.service';

@Component({
  selector: 'app-txn-form',
  templateUrl: './txn-form.component.html',
  styleUrls: ['./txn-form.component.css']
})
export class TxnFormComponent implements OnInit {

  txnForm:FormGroup;

  id:FormControl;
  particulars:FormControl;
  amount:FormControl;
  userId:FormControl;
  type:FormControl;
  dateOfTransaction:FormControl;

  err?:string;

  constructor(
    private activatedRoute:ActivatedRoute,
    private txnService:TxnService,
    private router:Router) {

    this.id=new FormControl(0);
    this.particulars=new FormControl('',[Validators.required,Validators.minLength(5)]);
    this.amount=new FormControl(0,[Validators.required,Validators.min(1)]);
    this.dateOfTransaction=new FormControl((new Date()).toISOString().substr(0,10),[Validators.required]);
    this.userId=new FormControl(this.activatedRoute.snapshot.params.uid);
    this.type=new FormControl('',[Validators.required]);

    this.txnForm=new FormGroup({
      id:this.id,
      amount:this.amount,
      particulars:this.particulars,
      dateOfTransaction:this.dateOfTransaction,
      type:this.type,
      userId:this.userId
    });
  }

  ngOnInit(): void {
  }

  formSubmited(){
    this.txnService.add(this.txnForm.value).subscribe(
      data => this.router.navigate(["/txns",this.userId.value]),
      err => {console.log(err);this.err="Unable to save transaction"}
    );
  }
}
