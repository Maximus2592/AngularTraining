import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { TxnsService } from 'src/app/service/txns.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-txns-form',
  templateUrl: './txns-form.component.html',
  styleUrls: ['./txns-form.component.css']
})
export class TxnsFormComponent implements OnInit {

    txnForm:FormGroup;
  
    id:FormControl;
    particulars:FormControl;
    amount:FormControl;
    userId:FormControl;
    type:FormControl;
    dateOfTransaction:FormControl;
  
    err?:string;
  
    isNew:boolean;

    user:User|null;
  
    constructor(
      private activatedRoute:ActivatedRoute,
      private txnService:TxnsService,
      private userService:UsersService,
      private router:Router) {
  
      this.user=this.userService.currentUser();

      this.isNew=true;
  
      this.id=new FormControl(0);
      this.particulars=new FormControl('',[Validators.required,Validators.minLength(5)]);
      this.amount=new FormControl(0,[Validators.required,Validators.min(1)]);
      this.dateOfTransaction=new FormControl((new Date()).toISOString().substr(0,10),[Validators.required]);
      this.userId=new FormControl(this.user?.id);
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
      let txnId = this.activatedRoute.snapshot.params.txnId;
      if(txnId){
        this.isNew=false;
        this.txnService.getById(txnId).subscribe(
          data => this.txnForm.setValue(data),
          err => {console.log(err);this.err="Unable to load transaction"}  
        );
      }
    }
  
    formSubmited(){
      let ob;
      
      if(this.isNew){
        ob=this.txnService.add(this.txnForm.value);
      }else{
        ob= this.txnService.update(this.txnForm.value);
      }
  
      ob.subscribe(
        data => this.router.navigateByUrl("/txns"),
        err => {console.log(err);this.err="Unable to save transaction"}
      );
    }
  }
  
